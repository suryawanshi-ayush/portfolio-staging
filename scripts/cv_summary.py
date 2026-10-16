"""Make Ayush_CV_revised.pdf from Ayush_CV.pdf by replacing only the professional summary.

There is no editable source for the CV (it was generated as a PDF), so this script edits the
PDF directly: it removes the old summary text between the section rule (y = 86 pt) and the
EDUCATION heading (y = 160 pt), sets the new summary in the same font, size, line spacing and
justification, and gives the file neutral metadata. Every other word keeps its exact text and
position. The original Ayush_CV.pdf is left unchanged.

Usage:  python3 scripts/cv_summary.py        (needs PyMuPDF and the Liberation Serif fonts)
"""
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "Ayush_CV.pdf", ROOT / "Ayush_CV_revised.pdf"
FONT = "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf"
SUMMARY = (
    "Chemical engineer with an M.Tech in Catalysis Technology from IIT Madras, connecting hands-on electrochemistry and materials research with process engineering and simulation. Made Bi-modified Pt/C catalysts, including in the KinCat group at NTNU, prepared inks and electrodes, and tested them in a three-electrode cell on an Autolab potentiostat (CV, ECSA, activity, durability). Modelled SNCR chemistry in Cantera, completed a DFT course project, and now evaluates electrocoagulation for effluent treatment at LOXIM Industries. Careful about safety, evidence and the limits of results."
)
FS, LEAD, FIRST_BASELINE = 10.5, 12.0, 102.0   # as in the original summary
X0, X1 = 48.0, 564.1                            # text column


def wrap(font, text):
    lines, cur = [], []
    for w in text.split():
        if font.text_length(" ".join(cur + [w]), fontsize=FS) <= X1 - X0:
            cur.append(w)
        else:
            lines.append(cur)
            cur = [w]
    return lines + [cur]


def main():
    font = pymupdf.Font(fontfile=FONT)
    lines = wrap(font, SUMMARY)
    if len(lines) != 5:
        raise SystemExit(f"Summary needs {len(lines)} lines; it must fit the original 5.")
    doc = pymupdf.open(SRC)
    page = doc[0]
    page.add_redact_annot(pymupdf.Rect(47, 90, 566, 155), fill=None)
    page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_NONE)
    tw = pymupdf.TextWriter(page.rect)
    space = font.text_length(" ", fontsize=FS)
    for i, words in enumerate(lines):
        widths = [font.text_length(w, fontsize=FS) for w in words]
        last = i == len(lines) - 1
        gap = space if last else (X1 - X0 - sum(widths)) / (len(words) - 1)  # justified, last line ragged
        x = X0
        for w, wd in zip(words, widths):
            tw.append((x, FIRST_BASELINE + LEAD * i), w, font=font, fontsize=FS)
            x += wd + gap
    tw.write_text(page)
    meta = doc.metadata
    meta.update(title="Ayush Suryawanshi – CV", subject="Curriculum vitae", author="Ayush Suryawanshi",
                modDate=pymupdf.get_pdf_now())
    doc.set_metadata(meta)
    doc.save(OUT, garbage=3, deflate=True)
    print(f"wrote {OUT.name}")


if __name__ == "__main__":
    main()
