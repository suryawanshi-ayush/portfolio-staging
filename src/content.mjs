// All facts on the site live here, so a date or number only ever needs changing once.
// Sources: the original CV (October 2026, kept outside this repo), the thesis, UTFORSK and SNCR report figures already
// published on the site, and the photos in images/.
import { fig, img } from './lib.mjs';

export const person = {
  name: 'Ayush Suryawanshi',
  email: 'ayush.suryawanshi0803@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayush-suryawanshi',
  github: 'https://github.com/suryawanshi-ayush',
  cv: 'Ayush_CV_revised.pdf',  // revised summary; the original is kept outside this repo
  role: 'Chemical engineer',
  location: 'Ahmedabad, India',
  updated: 'October 2026',
  updatedISO: '2026-10-16',
};

export const education = [
  {
    title: 'M.Tech, Catalysis Technology',
    org: 'Department of Chemical Engineering, IIT Madras, Chennai',
    when: 'Jun 2024 – May 2026',
    detail: 'CGPA 8.51/10. Degree conferred at the 63rd convocation, 17 July 2026.',
  },
  {
    title: 'Semester exchange',
    org: 'Department of Chemical Engineering, NTNU, Trondheim, Norway',
    when: 'Aug – Dec 2025',
    detail: 'UTFORSK mobility scholarship. Thesis catalyst synthesis in the KinCat group, hosted and supervised by Prof. Edd Anders Blekkan.',
  },
  {
    title: 'B.Tech, Chemical Engineering',
    org: 'Indore Institute of Science and Technology, affiliated to RGPV Bhopal',
    when: '2019 – 2023',
    detail: 'CGPA 8.17/10, First Division with Honours.',
  },
  {
    title: 'Senior School Certificate (Class XII, CBSE)',
    org: 'Delhi Public School, Chhindwara',
    when: '2019',
    detail: '84.2%.',
  },
];

export const experience = [
  {
    title: 'Management Trainee',
    org: 'LOXIM Industries Ltd., Ahmedabad',
    when: 'Jul 2026 – present',
    points: [
      'Leading technology selection for sulphate removal from plant effluent. Comparing shortlisted options on projected operating cost; the selection is still in progress.', // REVIEW(disclosure): employer cost figures removed pending LOXIM clearance
      'Evaluated electrocoagulation and electroflocculation as pretreatment options.',
      'Running screening, sample trials and feasibility checks with more than ten technology vendors.',
      'Trained on HPLC, GC-MS, FTIR and UV-Vis; completed plant safety induction and HSE training.',
    ],
  },
  {
    title: 'Deputy Placement and Internship Coordinator',
    org: 'Placement and Internship Cell, IIT Madras',
    when: 'Aug 2024 – Jul 2025',
    points: [
      // REVIEW(disclosure): the 75% placement figure is institutional data; confirm it is published.
      'Handled placements and internships for the 2023–25 and 2024–26 M.Tech batches; 75% of M.Tech chemical engineers were placed.',
    ],
  },
];

export const coursework =
  'Catalyst Preparation and Characterization Lab, Experimental Methods in Catalysis, Transport Phenomena, Process Safety and Hazards Management';

// The same skills as above, sorted by how I came by them. `used` skills appear in a project or a
// job on this site and link to it; the rest are on the CV but not shown in any project here, and
// the page says so. Where the sources do not say whether a method came from a course or a lab,
// it is listed as "not used in the projects shown" rather than guessed.
export const skillEvidence = [
  {
    title: 'Used in project work',
    note: 'Each of these appears in a project on this site.',
    rows: [
      ['Electrochemical testing', 'Autolab potentiostat with NOVA, three-electrode cell, cyclic voltammetry, chronoamperometry, ECSA, one-hour durability holds', [['thesis-bi-pt-formic-acid', 'Thesis']]],
      ['Electrodes and catalysts', 'Wet-chemical catalyst modification, catalyst ink formulation and Nafion loading, drop-cast electrodes on glassy carbon and carbon paper', [['thesis-bi-pt-formic-acid', 'Thesis'], ['ntnu-synthesis-scale-up', 'NTNU synthesis']]],
      ['Characterisation', 'FE-SEM with EDX, powder XRD, BET: reading and interpreting the results', [['thesis-bi-pt-formic-acid', 'Thesis'], ['ntnu-synthesis-scale-up', 'NTNU synthesis']]],
      ['Computational chemistry', 'Gaussian 16 (DFT), Avogadro', [['dft-orr-pt13', 'Pt13 DFT']]],
      ['Kinetic modelling and process design', 'Python with Cantera, Excel, mass and energy balances, capital and running-cost estimates (team project)', [['sncr-biomass-boiler', 'SNCR design']]],
      ['Data analysis', 'OriginPro', [['thesis-bi-pt-formic-acid', 'Thesis']]],
      ['Handling hazards in the lab', 'Acids, sodium borohydride, inert-gas (nitrogen and argon) work', [['thesis-bi-pt-formic-acid', 'Thesis'], ['ntnu-synthesis-scale-up', 'NTNU synthesis']]],
    ],
  },
  {
    title: 'From the current job',
    note: 'Training and work at LOXIM Industries, from my CV. Not a research project.',
    rows: [
      ['Analytical instruments', 'HPLC, GC-MS, FTIR and UV-Vis: training', [['#now', 'LOXIM role']]],
      ['Plant safety', 'Plant HSE induction and SOP training', [['#now', 'LOXIM role']]],
      ['Technology selection', 'Screening, sample trials and feasibility checks with vendors; pretreatment options', [['#now', 'LOXIM role']]],
    ],
  },
  {
    title: 'From coursework',
    note: 'Learned and practised in courses, not part of the projects shown here.',
    rows: [
      ['XPS', 'Analysed XPS data in M.Tech coursework', []],
      ['Courses', coursework, []],
    ],
  },
  {
    title: 'Also on my CV, not used in the projects shown',
    note: 'Listed for completeness; none of the project pages rely on them.',
    rows: [['Methods', 'Linear sweep voltammetry, electrochemical impedance spectroscopy, chronopotentiometry, TGA', []]],
  },
];

export const recognition = [
  { title: 'Poster on SNCR NOx reduction, Treforedlingsforum 2025', where: 'Oslo, Norway', when: 'Nov 2025' },
  { title: 'Attended EuropaCat 2025, the European catalysis congress', where: 'Trondheim, Norway', when: '2025' },
  { title: 'UTFORSK mobility scholarship', where: 'NTNU, for a research semester in Norway', when: '2025' },
  { title: 'GIAN course on characterisation of heterogeneous catalysts', where: 'IIT Madras', when: 'Apr – May 2025' },
  { title: 'GATE 2024, Chemical Engineering: All India Rank 864', where: 'Out of 13,937 candidates', when: 'Feb 2024' },
  { title: 'Paper presentation, SCHEMCON 2021', where: 'MANIT and IISER Bhopal', when: 'Oct 2021' },
];

// The four stages the home page uses to show how the work connects.
export const stages = [
  {
    n: '01',
    title: 'Catalyst synthesis',
    text: 'Wet-chemical modification of commercial Pt/C: adsorption, borohydride reduction and annealing under argon, and, at NTNU, redesigning a literature route after an ignition on the filter.',
    links: [['thesis-bi-pt-formic-acid', 'Bi-modified Pt/C series'], ['ntnu-synthesis-scale-up', 'Synthesis rework at NTNU']],
  },
  {
    n: '02',
    title: 'Electrodes and electrochemistry',
    text: 'Catalyst inks and drop-cast electrodes on glassy carbon and carbon paper, tested in a three-electrode cell: CV, ECSA, mass activity and one-hour holds, backed by FE-SEM, EDX, XRD and BET.',
    links: [['thesis-bi-pt-formic-acid', 'Durability results']],
  },
  {
    n: '03',
    title: 'Modelling and simulation',
    text: 'DFT of oxygen reduction intermediates on a Pt<sub>13</sub> cluster in Gaussian 16, and combustion and SNCR reaction kinetics modelled in Python with Cantera.',
    links: [['dft-orr-pt13', 'DFT of oxygen reduction'], ['sncr-biomass-boiler', 'SNCR kinetic model']],
  },
  {
    n: '04',
    title: 'Process engineering',
    text: 'Design and technology selection under real constraints: an SNCR retrofit for a biomass boiler with Norwegian industry partners, and effluent treatment options at LOXIM Industries.',
    links: [['sncr-biomass-boiler', 'SNCR retrofit design'], ['#now', 'Current work at LOXIM']],
  },
];

// How the current industrial role connects to the lab and design work. Each item rests on the CV
// (LOXIM) or a project source (SNCR report, NTNU synthesis); nothing here claims results beyond them.
export const loximBridge = [
  {
    title: 'Technology selection',
    text: 'Shortlisting effluent-treatment options and screening them for feasibility, the same kind of choice as picking ammonia as the SNCR reagent for performance and cost.',
    link: ['sncr-biomass-boiler', 'SNCR design study'],
  },
  {
    title: 'Electrochemical pretreatment',
    text: 'Electrocoagulation and electroflocculation use electrodes and an applied current in the effluent, so what I learned about electrodes and electrochemical cells in the lab is relevant to evaluating them.',
    link: ['thesis-bi-pt-formic-acid', 'Electrode and cell work'],
  },
  {
    title: 'Vendor trials',
    text: 'Screening, sample trials and feasibility checks with more than ten technology vendors, reading each claim against what the trial data can actually show.',
  },
  {
    title: 'Process economics',
    text: 'Comparing options on projected operating cost, with the selection still in progress. The SNCR study also costed capital and running costs.',
    link: ['sncr-biomass-boiler', 'SNCR economics'],
  },
  {
    title: 'Safety',
    text: 'Plant safety induction and HSE training at LOXIM. Earlier, an ignition on a filter reworked a synthesis route at NTNU, and the SNCR design set out ammonia safety measures.',
    link: ['ntnu-synthesis-scale-up', 'Synthesis rework'],
  },
];

export const timeline = [
  {
    when: 'Jul 2026 – present',
    title: 'Management Trainee, LOXIM Industries',
    where: 'Ahmedabad',
    text: 'My first industry role: technology selection for sulphate removal from plant effluent, including electrocoagulation and electroflocculation as pretreatment, with vendor screening, sample trials and feasibility checks.',
  },
  {
    when: 'Jul 2026',
    title: 'M.Tech degree, 63rd convocation of IIT Madras',
    where: 'Chennai',
    text: 'Degree conferred on 17 July 2026, after submitting the thesis in May.',
    photo: ['ayush-receiving-his-degree-certificate-on-stage-with.jpg', 'Ayush receiving his degree certificate on stage from two faculty members', 'Receiving my M.Tech degree at the 63rd convocation of IIT Madras, July 2026.'],
  },
  {
    when: 'Aug – Dec 2025',
    title: 'Research semester at NTNU, Norway',
    where: 'Trondheim, on a UTFORSK mobility scholarship',
    text: 'Synthesised the thesis catalysts in the KinCat group, where Prof. Edd Anders Blekkan hosted and supervised the work, reworked the route after an ignition on the filter, and joined a four-person SNCR process design project for two Norwegian industry partners. Attended EuropaCat 2025 in Trondheim and presented our poster at Treforedlingsforum 2025 in Oslo.',
    photo: ['ayush-at-ntnu-main-building-trondheim.jpg', 'Ayush and a friend standing behind the large blue NTNU letters in front of the main university building in Trondheim', 'At NTNU’s main building in Trondheim during the exchange semester.'],
  },
  {
    id: 'mtech',
    when: 'Jun 2024 – May 2026',
    title: 'M.Tech, Catalysis Technology, IIT Madras',
    where: 'Department of Chemical Engineering · CGPA 8.51/10',
    text: 'Two years on how catalysts work and how to make and test them: adsorption and catalysis, solids and surfaces, reactor theory, thermodynamics and transport, a catalyst preparation and characterisation lab, and computational methods in catalysis.',
    blocks: [
      ['Thesis', 'Formic acid can power small fuel cells, but the platinum catalyst that oxidises it gets clogged by carbon monoxide from a side reaction, and the current fades within an hour. With Prof. Raghuram Chetty I tested two remedies: a sub-monolayer of bismuth on commercial Pt/C, which is thought to leave fewer of the neighbouring platinum sites that CO needs to form, and a dissolved quinone (AQSA) that acts as a redox mediator. In three-electrode half-cell tests the catalyst with the least bismuth worked best, keeping 92.9% of its current over a one-hour hold against 58.5% for unmodified Pt/C.', 'projects/thesis-bi-pt-formic-acid/'],
      ['Also', 'A DFT study of oxygen reduction on a 13-atom platinum cluster (Jan – May 2025) and a GIAN course on characterising heterogeneous catalysts (Apr – May 2025).', 'projects/dft-orr-pt13/'],
      ['Role', 'Deputy Placement and Internship Coordinator, Placement and Internship Cell, IIT Madras (Aug 2024 – Jul 2025). Handled placements and internships for the 2023–25 and 2024–26 M.Tech batches; 75% of M.Tech chemical engineers were placed.'],
    ],
  },
  {
    when: 'Feb 2024',
    title: 'GATE 2024, Chemical Engineering',
    where: 'All India Rank 864 of 13,937 candidates',
    text: 'The national entrance exam that opened the door to the M.Tech at IIT Madras.',
  },
  {
    when: '2019 – 2023',
    title: 'B.Tech, Chemical Engineering',
    where: 'Indore Institute of Science and Technology (RGPV Bhopal)',
    text: 'The core of chemical engineering: transport, reaction engineering, process control, equipment design and process safety. CGPA 8.17/10, First Division with Honours. Presented a paper at SCHEMCON 2021 in Bhopal.',
  },
];

// Certificates chosen because each one evidences a thread of the portfolio. Listed as text only:
// the images carry signatures, seals and IDs, so they are not published.
export const credentials = [
  {
    slug: 'mtech-degree-iit-madras',
    title: 'Master of Technology, Catalysis Technology',
    issuer: 'IIT Madras',
    when: '17 July 2026',
    note: 'Degree conferred at the 63rd convocation.',
    alt: 'IIT Madras degree certificate conferring the degree of Master of Technology in Catalysis Technology on Ayush Suryawanshi, dated 17 July 2026',
  },
  {
    slug: 'treforedlingsforum-2025-poster',
    title: 'Poster: SNCR technology for reduction of NOx emissions in a bio-boiler',
    issuer: 'Treforedlingsforum 2025 (PTF), Oslo',
    when: '18–19 November 2025',
    note: 'Presented the SNCR design study.',
    link: ['projects/sncr-biomass-boiler/', 'The SNCR project'],
    alt: 'Certificate of participation from Treforedlingsforum 2025 in Oslo for presenting research titled SNCR-technology for reduction of NOx emissions in a bio-boiler',
  },
  {
    slug: 'gian-heterogeneous-catalysts-2025',
    title: 'Characterization of Heterogeneous Catalysts: Bulk, Surface, In-Situ and Operando Methods',
    issuer: 'GIAN course, Department of Chemical Engineering, IIT Madras',
    when: '21 April – 4 May 2025',
    note: 'Two-week course taught with Prof. Miguel A. Bañares (CSIC, Madrid).',
    alt: 'GIAN certificate of participation for the course Characterization of Heterogeneous Catalysts: Bulk, Surface, In-Situ and Operando Methods, IIT Madras, 21 April to 4 May 2025',
  },
  {
    slug: 'schemcon-2021-paper',
    title: 'Paper presentation, SCHEMCON 2021',
    issuer: 'MANIT and IISER Bhopal',
    when: '22–23 October 2021',
    note: '17th Annual Session of the Students Chemical Engineering Congress.',
    alt: 'Certificate of presentation from SCHEMCON 2021, organised by MANIT and IISER Bhopal, for a paper presented on 22 to 23 October 2021',
  },
];

// REVIEW(disclosure): photos of other people (research group, batch, teammates, friends) need
// their consent for a public site.
export const gallery = [
  // [file, alt, caption, focal point, wide]
  ['ayush-in-front-of-the-europacat-2025-trondheim.jpg', 'Ayush standing in front of the EuropaCat 2025 Trondheim backdrop', 'At EuropaCat 2025, the European catalysis congress, in Trondheim.', '72% 50%'],
  ['ayush-reading-conference-posters.jpg', 'Ayush reading posters at a conference poster session', 'Reading the poster session at EuropaCat 2025.', '50% 40%'],
  ['ayush-suryawanshi-group-selfie-of-a-research-group.jpg', 'Group selfie of a research group of about fifteen people', 'With my thesis supervisor’s research group at IIT Madras.'],
  ['sncr-project-team-dinner-trondheim.jpg', 'Ayush and friends from the SNCR project smiling around a dinner table', 'A dinner I hosted for my SNCR project group in Norway.', '50% 15%', true],
  ['hiking-with-friends-norway.jpg', 'Ayush and three friends in rain jackets beside a stone cairn on a misty hike', 'Hiking with friends in Norway.'],
  ['ayush-suryawanshi-group-photo-of-m-tech-students-in-convocation.jpg', 'Group photo of M.Tech students in convocation stoles with faculty', 'My M.Tech Catalysis Technology batch with faculty on convocation day.', '50% 20%', true],
  ['ayush-sitting-on-a-snow-covered-bench-outside.jpg', 'Ayush sitting on a snow-covered bench outside NTNU buildings', 'First snow in Trondheim during the exchange semester.'],
];

/* ------------------------------------------------------------------ projects */

const durability = [
  // catalyst, retention with formic acid only, with AQSA (current at 3600 s as % of current at 61 s)
  // REVIEW(disclosure): unpublished thesis figures; kept as the page's one summary result, needs supervisor clearance.
  ['Bi(1.25)-Pt/C', 92.89, 70.38],
  ['Bi(2.5)-Pt/C', 67.35, 49.13],
  ['Commercial Pt/C', 58.53, 55.6],
  ['Bi(5)-Pt/C', 52.76, 35.48],
  ['Bi(10)-Pt/C', 39.27, 38.28],
];

function durabilityChart() {
  const rows = durability
    .map(
      ([name, fa, aq]) => `<div class="bars-row" role="listitem">
      <span class="bars-label">${name}</span>
      <span class="bars-pair">
        <span class="bar s1" style="--v:${fa}" data-series="fa"><span class="bar-val">${fa.toFixed(1)}%</span><span class="sr-only">, formic acid only</span></span>
        <span class="bar s2" style="--v:${aq}" data-series="aq"><span class="bar-val">${aq.toFixed(1)}%</span><span class="sr-only">, with AQSA</span></span>
      </span>
    </div>`,
    )
    .join('');
  return `<figure class="chart" data-chart="durability" aria-labelledby="dur-title">
  <div class="chart-head">
    <p class="chart-title" id="dur-title">Current retained after a one-hour hold</p>
    <p class="chart-sub">Separate durability experiment on carbon paper electrodes (not the glassy carbon disk used for voltammetry), in a half-cell with formic acid in dilute sulphuric acid. Current at the end of the hour as a share of the current just after the first-minute charging transient. Bars show retention, not output. Repeat counts and error bars are not reported in the thesis.</p>
    <div class="seg" role="group" aria-label="Series shown">
      <button type="button" aria-pressed="true" data-show="both">Both</button>
      <button type="button" aria-pressed="false" data-show="fa">Formic acid only</button>
      <button type="button" aria-pressed="false" data-show="aq">With AQSA</button>
    </div>
    <ul class="legend" aria-hidden="true"><li><i class="sw s1"></i>Formic acid only</li><li><i class="sw s2"></i>With AQSA</li></ul>
  </div>
  <div class="bars" role="list">${rows}
    <div class="bars-axis" aria-hidden="true"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
  </div>
</figure>`;
}

const dftSteps = [
  ['O<sub>2</sub>* → OOH*', 'OOH* forms', -2.84],
  ['OOH* → O* + H<sub>2</sub>O', 'O* and water form', -2.05],
  ['O* → OH*', 'OH* forms', -1.85],
  ['OH* → H<sub>2</sub>O + Pt<sub>13</sub>', 'Water released, cluster regenerated', -3.9],
];

function dftChart() {
  const max = 5;
  const rows = dftSteps
    .map(
      ([eq, label, v]) => `<div class="neg-row" role="listitem">
      <span class="neg-label"><span class="eq">${eq}</span><span class="muted">${label}</span></span>
      <span class="neg-track"><span class="neg-val">${v.toFixed(2).replace('-', '−')} eV</span><span class="neg-bar" style="--v:${(Math.abs(v) / max) * 100}"></span></span>
    </div>`,
    )
    .join('');
  return `<figure class="chart" aria-labelledby="dft-title">
  <div class="chart-head">
    <p class="chart-title" id="dft-title">Tabulated step energies (eV)</p>
    <p class="chart-sub">Associative four-electron pathway on Pt<sub>13</sub>, UB3LYP, from the report’s step table. Electronic energies only: no zero-point, thermal or entropy corrections, and no barriers.</p>
  </div>
  <div class="neg" role="list">${rows}
    <div class="neg-axis" aria-hidden="true"><span>−5</span><span>−4</span><span>−3</span><span>−2</span><span>−1</span><span>0</span></div>
  </div>
</figure>`;
}

// The animated explainer of why bismuth helps. Schematic only; the JS in site.js runs it.
export function mechanism({ compact = false } = {}) {
  const pt = Array.from({ length: 11 }, (_, i) => `<circle class="pt" cx="${60 + i * 52}" cy="214" r="21"/>`).join('');
  const bi = [2, 5, 8].map((i) => `<circle class="bi" cx="${60 + i * 52 + 26}" cy="186" r="15"/>`).join('');
  return `<figure class="mech${compact ? ' compact' : ''}" data-mech data-mode="pt">
  <div class="mech-controls">
    <div class="seg" role="group" aria-label="Catalyst surface">
      <button type="button" aria-pressed="true" data-mode="pt">Pt/C</button>
      <button type="button" aria-pressed="false" data-mode="bi">Bi-modified Pt/C</button>
    </div>
    <button type="button" class="link-btn" data-replay>Replay</button>
  </div>
  <svg viewBox="10 50 620 240" role="img" aria-labelledby="mech-t mech-d">
    <title id="mech-t">Schematic of formic acid oxidation on a platinum surface</title>
    <desc id="mech-d">Formic acid molecules arrive at a row of platinum atoms. On plain platinum some of them leave adsorbed carbon monoxide that blocks sites. With bismuth atoms sitting on the surface, the molecules go straight to carbon dioxide.</desc>
    <rect class="support" x="20" y="232" width="600" height="48" rx="6"/>
    <text class="support-label" x="36" y="262">carbon support</text>
    <g class="pt-row">${pt}</g>
    <g class="bi-row">${bi}</g>
    <g class="mols"></g>
    <g class="mech-key" transform="translate(28 64)">
      <circle class="pt" cx="7" cy="7" r="7"/><text x="20" y="11">Pt</text>
      <circle class="bi" cx="60" cy="7" r="7"/><text x="73" y="11">Bi</text>
    </g>
  </svg>
  <div class="mech-readout">
    <div><span class="k">Free Pt sites</span><span class="v" data-free>11 / 11</span></div>
    <div class="meter" aria-hidden="true"><span data-meter></span></div>
    <p class="mech-note" aria-live="polite" data-note>On plain platinum, part of the formic acid takes the indirect path and leaves CO stuck to the surface. Each blocked site stops contributing current.</p>
  </div>
  <figcaption>Schematic, not to scale and not a simulation. Direct path: HCOOH → CO<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup>. Indirect path: HCOOH → CO<sub>ads</sub> + H<sub>2</sub>O, which needs several neighbouring Pt atoms. Bismuth sitting on the surface breaks up those groups of sites.</figcaption>
</figure>`;
}

// A plain table with row headings; `hl` lists the row indexes to highlight. The wrapper scrolls
// sideways on narrow screens, so it is a labelled, focusable region.
let tableId = 0;
const table = (caption, head, rows, { hl = [], note = '' } = {}) => {
  const id = `tbl-${++tableId}`;
  return `<div class="table-wrap cols-${head.length}" role="region" aria-labelledby="${id}" tabindex="0"><table>
  <caption id="${id}">${caption}</caption>
  <thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
  <tbody>${rows
    .map((r, i) => `<tr${hl.includes(i) ? ' class="hl"' : ''}><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`)
    .join('')}</tbody>
</table></div>${note ? `<p class="note">${note}</p>` : ''}`;
};

const defs = (rows) => `<dl class="defs">${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>`;

export const projects = [
  /* ------------------------------------------------------------------ thesis */
  {
    // REVIEW(disclosure): retention figures (92.9%, 58.5%, the chart), the 2.5-2.8x Nafion effect, the
    // AQSA negative result, the mechanism and the thesis title are unpublished; ask Prof. Chetty before
    // going live. The headline 92.9%/58.5% is already on the live site.
    slug: 'thesis-bi-pt-formic-acid',
    kind: ['lab'],
    kindLabel: 'Experimental research · M.Tech thesis',
    title: 'Keeping platinum clean in formic acid fuel cells',
    short: 'Bi-modified Pt/C catalysts and a quinone mediator, tested for how long they hold their current.',
    description:
      'M.Tech thesis by Ayush Suryawanshi at IIT Madras: Bi-modified Pt/C catalysts and AQSA quinone mediation for formic acid oxidation, with synthesis, characterisation and half-cell durability testing.',
    when: 'May 2025 – May 2026',
    where: 'IIT Madras, with synthesis at NTNU, Norway',
    card: 'half-cell-electrodes',
    cardImg: ['ayush-suryawanshi-photo-7d467c05.jpg', 'Glassy carbon working electrode, platinum coil and reference electrode inside a glass half-cell'],
    stats: [
      ['92.9%', 'current retained after 1 h, best catalyst (half-cell)'],
      ['58.5%', 'commercial Pt/C, same test'],
      ['2.5–2.8×', 'peak current with a thinner Nafion film'],
    ],
    tags: ['Electrocatalysis', 'Formic acid oxidation', 'Potentiostat', 'FE-SEM / EDX / XRD'],
    meta: [
      ['Type', 'M.Tech thesis'],
      ['Supervisor', 'Prof. Raghuram Chetty, IIT Madras'],
      ['At NTNU', 'KinCat group; hosted and supervised by Prof. Edd Anders Blekkan'],
      ['Methods', 'Wet-chemical synthesis, catalyst inks, CV, chronoamperometry, FE-SEM, EDX, XRD, BET'],
      ['Tools', 'Autolab potentiostat with NOVA, OriginPro'],
      ['Full title', 'Feasibility Study and Performance Evaluation of Hybrid Quinone–Formic Acid Systems as Alternative Fuels for Proton Exchange Membrane Fuel Cells'],
    ],
    glance: [
      ['Problem', 'Platinum oxidises formic acid well at first, but adsorbed CO builds up and the current falls within an hour.'],
      ['My contribution', 'Made and characterised four Bi-modified Pt/C catalysts, tuned the catalyst ink, and tested them with and without a quinone mediator (AQSA) in a three-electrode half-cell.'],
      ['Key result', 'Bi(1.25)-Pt/C, with the least bismuth, retained 92.9% of its current over a one-hour hold, against 58.5% for commercial Pt/C. The mediator did not improve retention.'],
      ['Limits', 'Half-cell, acid, one hour. No replicate counts or error bars are reported, and there is no membrane electrode assembly or full-cell test yet.'],
    ],
    hero: ['ayush-suryawanshi-photo-7d467c05.jpg', 'Close-up of a glass three-electrode cell: a coiled platinum wire, an Ag/AgCl reference electrode and a catalyst-coated glassy carbon working electrode', 'Inside the half-cell: a coiled platinum wire as the counter electrode, an Ag/AgCl reference electrode, and the catalyst-coated glassy carbon working electrode used for the voltammetry.'],
    sections: () => [
      ['problem', 'Problem and baseline', `
<p>Formic acid is an attractive fuel for small fuel cells: it is liquid, easy to store, and crosses a Nafion membrane far less than methanol does. Platinum oxidises it well at first, but a side reaction leaves carbon monoxide stuck to the surface. As the platinum fills up, the current drops within the first hour.</p>
<p><strong>Baseline.</strong> Commercial Pt/C is the reference throughout. In the one-hour hold it retained 58.5% of its current.</p>
<p>I tested two ways of protecting the platinum, and whether they help or hinder each other: decorating the Pt/C with bismuth, which is known to block the CO-forming path, and adding a dissolved quinone, anthraquinone-2-sulfonic acid (AQSA), as a redox mediator in the electrolyte.</p>
${mechanism()}`],
      ['contribution', 'My contribution', `
<p>This was my M.Tech thesis, supervised by Prof. Raghuram Chetty at IIT Madras, with the catalyst synthesis done in the KinCat group at NTNU. I made the four catalysts, formulated the inks and prepared the electrodes, ran the voltammetry and the one-hour holds on an Autolab potentiostat, and analysed the results, using FE-SEM, EDX, XRD and BET data to connect bismuth loading with morphology and activity.</p>`],
      // REVIEW(disclosure): exact recipe quantities, ink volumes, the AQSA concentration screen, EDX
      // compositions, crystallite sizes, the BET value, full activity tables and raw-data figures were
      // removed pending supervisor clearance (unpublished thesis). See the disclosure review.
      ['methods', 'Methods and assumptions', `
<ol class="steps">
  <li><h3>Made a series of catalysts</h3><p>Commercial Pt/C was modified with bismuth at four loadings by a wet-chemical route: adsorption from solution under an inert atmosphere, chemical reduction and a thermal treatment.</p></li>
  <li><h3>Tracked where the bismuth went</h3><p>FE-SEM with EDX, powder XRD and, for the best catalyst, nitrogen physisorption (BET).</p></li>
  <li><h3>Tuned the catalyst ink</h3><p>Compared two Nafion binder contents in a water and isopropanol ink, and kept the thinner film for the later comparisons.</p></li>
  <li><h3>Built and tested electrodes</h3><p>Drop-cast electrodes on a glassy carbon disk for voltammetry, the electrode in the photos, and on carbon paper for the separate one-hour holds, in a three-electrode cell with a platinum counter and an Ag/AgCl reference. The quinone mediator was screened at several concentrations.</p></li>
  <li><h3>Ran durability holds</h3><p>Each catalyst, on carbon paper, was held at a fixed potential for one hour, with and without the mediator.</p></li>
</ol>
${defs([
  ['Electrolyte', 'Formic acid in dilute sulphuric acid, nitrogen-purged, room temperature'],
  ['Retention', 'Current at the end of the hour as a share of the current just after the first-minute charging transient.'],
  ['Mass activity', 'Peak current per mass of platinum on the electrode.'],
  ['Potentials', 'Measured against Ag/AgCl and reported on the RHE scale.'],
])}`],
      ['results', 'Results', `
<h3>Where the bismuth went</h3>
<p>At the two lowest loadings there were no separate bismuth crystals in SEM or XRD: bismuth sat on the platinum as a thin decoration. At the highest loading, bright Bi-rich clusters appeared and covered much of the platinum.</p>

<h3>Less Nafion, more current</h3>
<p>On the glassy carbon electrode, the thinner Nafion film gave roughly 2.5–2.8 times the peak current of the thicker one, even though the thicker film showed slightly more active area on plain Pt/C. The active-area measurement only needs protons to reach the platinum, but formic acid has to diffuse through the film, so a thick ionomer layer wins one test and loses the other. The effect was found on Pt/C and then seen again on a Bi-modified catalyst.</p>

<h3>Activity is not durability</h3>
<p>A mid-range bismuth loading gave the most impressive voltammogram, but most of its peak came from oxidising CO that had already formed: it was recovering from poisoning rather than avoiding it, and it decayed fastest of the modified catalysts in the one-hour hold. The lowest-bismuth catalyst gave a much higher current on the direct pathway, before any CO is burned off, than commercial Pt/C.</p>

<h3>Which catalyst lasted</h3>
${durabilityChart()}
<ul class="tight">
  <li><strong>The least bismuth worked best for stability.</strong> Bi(1.25)-Pt/C, the lowest loading, retained the most current in both electrolytes.</li>
  <li><strong>Retention is not output.</strong> Retention measures decay, not current. After an hour, a higher-loading catalyst still delivered more current because it started much higher; the lowest-bismuth catalyst’s advantage is that it decayed far less, ending only slightly above commercial Pt/C.</li>
  <li><strong>The mediator did not help in these tests.</strong> At the concentration used for the comparison, AQSA lowered peak activity and one-hour retention on the catalysts compared.</li>
</ul>`],
      ['limits', 'Limitations', `
<ul class="tight">
  <li><strong>Half-cell, acid, one hour.</strong> Everything was measured in a three-electrode half-cell at room temperature. The numbers rank catalysts against each other; they are not fuel-cell performance. Practical fuel cells run for hundreds to thousands of hours, and the thesis names a membrane electrode assembly with Bi(1.25)-Pt/C, in situ spectroscopy, and longer degradation tests as the next steps.</li>
  <li><strong>Repeatability is not reported.</strong> The thesis gives no replicate counts, standard deviations or error bars for the voltammetry or the durability holds, so differences should be read as indicative rankings, not statistically tested results. Two trends were seen again on a second catalyst, which is a check on the trend, not a replicate.</li>
  <li><strong>Coarse bismuth grid.</strong> Four bismuth loadings were tested, and the best was the lowest. The true optimum may sit between or below them.</li>
  <li><strong>Mechanism is inferred.</strong> Third-body blocking of CO-forming sites is the explanation that fits the data; it was not observed directly. The schematic above is illustrative.</li>
</ul>
<p class="takeaway"><strong>What I took from it.</strong> A good-looking voltammogram is not the same as a durable catalyst, and retention is not the same as output. I now check durability before ranking anything, and I think about what each measurement can and cannot see.</p>`],
      ['evidence', 'Supporting evidence', `
<p>This page summarises results from my M.Tech thesis, written for IIT Madras. The thesis, its figures and the raw voltammetry and chronoamperometry files are not published here; questions about the work are welcome by email.</p>
<details class="more"><summary>The test setup</summary>
<div class="fig-row">
${fig('ayush-suryawanshi-glass-cell-with-glassy-carbon-electrode-and-potentiostat.jpg', 'Sealed glass cell with a glassy carbon electrode, connected to the potentiostat leads', 'The cell ready for cyclic voltammetry: glassy carbon working electrode, platinum counter and Ag/AgCl reference, each clipped to the potentiostat.', { cls: 'tall', sizes: '(min-width: 720px) 340px, 50vw' })}
${fig('ayush-suryawanshi-glass-cell-with-a-carbon-paper-electrode-and.jpg', 'Glass cell with formic acid electrolyte, a glassy carbon working electrode and a coiled platinum counter electrode', 'The same three-electrode cell filled with formic acid electrolyte for a voltammetry run.', { cls: 'tall', sizes: '(min-width: 720px) 340px, 50vw' })}
</div>
</details>`],
    ],
  },

  /* -------------------------------------------------------------- NTNU synthesis */
  {
    // REVIEW(disclosure): ignition incident in a host lab, route changes, the 220 mg figure, SEM images
    // and the KinCat group name need Prof. Blekkan's agreement (source: unpublished UTFORSK report).
    slug: 'ntnu-synthesis-scale-up',
    kind: ['lab'],
    kindLabel: 'Experimental research · KinCat group, NTNU',
    title: 'Reworking a catalyst synthesis after an ignition on the filter',
    short: 'Three batches of Bi-modified Pt/C: a low-yield first batch, an ignition in the second, and a changed aqueous route with no ignition observed.',
    description:
      'Catalyst synthesis rework in the KinCat group at NTNU, Norway, by Ayush Suryawanshi: three batches of Bi-modified Pt/C, a borohydride ignition during filtration, and an aqueous route with no ignition observed.',
    when: 'Aug – Dec 2025',
    where: 'KinCat group, Department of Chemical Engineering, NTNU, Trondheim',
    cardImg: ['ayush-suryawanshi-photo-baa04525.jpg', 'Ayush in cleanroom gear at an SEM workstation'],
    stats: [
      ['3', 'synthesis batches'],
      ['~220 mg', 'recovered from Batch 3, the highest of the three'],
    ],
    tags: ['Catalyst synthesis', 'Process safety', 'SEM'],
    meta: [
      ['Type', 'Experimental research, part of the thesis'],
      ['Supervisor at NTNU', 'Prof. Edd Anders Blekkan'],
      ['Funding', 'UTFORSK mobility scholarship'],
      ['Methods', 'Aqueous chemical reduction, filtration and drying, SEM'],
    ],
    glance: [
      ['Problem', 'Following the literature procedure recovered very little catalyst, and the scaled-up second batch ignited on the filter.'],
      ['My contribution', 'Ran the three batches and changed the route after each one: an aqueous borohydride step, less reductant and a changed filtration.'],
      ['Key result', 'No ignition was observed in Batch 3, which also gave the highest recovered mass, about 220 mg, with uniform SEM morphology.'],
      ['Limits', 'Three batches, with a mass reported only for Batch 3. This does not validate scale-up, and no activity data are reported for the individual batches.'],
    ],
    hero: ['ayush-suryawanshi-photo-baa04525.jpg', 'Ayush in cleanroom gear at an SEM workstation', 'At the SEM in the NTNU cleanroom, checking a batch.'],
    sections: () => [
      ['problem', 'Problem and baseline', `
<p>The thesis needed one synthesis route I could rely on. The baseline was the literature procedure for Bi-modified Pt/C, which uses a dichloromethane-based reduction. Followed exactly, it recovered very little catalyst: most of the material was lost during filtration, and the surface looked contaminated under the microscope.</p>`],
      ['contribution', 'My contribution', `
<p>I ran all three batches in the KinCat group at NTNU, hosted by Prof. Edd Anders Blekkan, and changed the procedure after each one: first scaling up, then replacing the solvent-based reduction with an aqueous borohydride step, using less reductant and changing the filtration. I also took the SEM images of the batches.</p>`],
      ['methods', 'Methods and assumptions', `
<ul class="tight">
  <li><strong>Comparison basis.</strong> Batches were compared on recovered mass, what happened during filtration, and SEM morphology. Electrochemical activity was not measured on the individual batches.</li>
  <li><strong>Safety observation.</strong> The ignition was seen during filtration, when residual sodium borohydride on the filter ignited. The report does not quantify residual borohydride or describe a formal hazard assessment.</li>
  <li><strong>Final route.</strong> Aqueous borohydride in place of the dichloromethane-based reduction, a smaller amount of reductant, and modified filtration conditions.</li>
</ul>
<div class="fig-row">
${fig('ayush-suryawanshi-catalyst-slurry-stirring-on-a-hotplate.jpg', 'A flask of black catalyst slurry on a magnetic stirrer', 'Adsorbing Bi³⁺ onto Pt/C under stirring, the first step of every batch.', { cls: 'tall', sizes: '(min-width: 720px) 340px, 50vw' })}
${fig('ayush-at-a-fume-hood-in-the-ntnu.jpg', 'Ayush working at a fume hood in the NTNU lab', 'Working through the synthesis at the fume hood in the NTNU lab.', { cls: 'tall', sizes: '(min-width: 720px) 340px, 50vw' })}
</div>`],
      ['results', 'Results', `
${table(
  'Batch comparison',
  ['Batch', 'Route', 'Recovery', 'Safety observation', 'SEM morphology'],
  [
    ['1', 'Literature procedure, dichloromethane-based reduction', 'Extremely low, from filtration losses and possible contamination during recovery', 'No ignition reported', 'Heterogeneous surface, sheet-like features'],
    ['2', 'Scaled up from Batch 1', 'More material than Batch 1 (mass not reported)', 'Residual NaBH<sub>4</sub> ignited during filtration', 'Cleaner, uniform nanoparticle distribution'],
    ['3', 'Aqueous NaBH<sub>4</sub>, less reductant, modified filtration', 'Highest of the three, about 220 mg', 'No ignition observed', 'Uniform dispersion, dense raspberry-like nanoclusters'],
  ],
  { hl: [2], note: 'Batch sizes and recovered masses for Batches 1 and 2 are not given in the source report, so the table has no numbers for them.' },
)}
<p>SEM of Batches 2 and 3 showed densely packed nanoclusters with a rough surface and metal particles spread evenly over the carbon support, without the irregular, sheet-like features of Batch 1.</p>`],
      ['limits', 'Limitations', `
<ul class="tight">
  <li><strong>Not a scale-up validation.</strong> About 220 mg from a single batch shows the changed route recovered more material and ran without an ignition at this size. It does not show that the route is safe or reproducible at larger scale.</li>
  <li><strong>“No ignition observed” is not “no risk”.</strong> Three batches were run and no hazard assessment was reported, so the observation is not proof that the risk is gone.</li>
  <li><strong>No activity data per batch.</strong> The comparison rests on recovered mass and microscopy.</li>
</ul>
<p class="takeaway"><strong>What I took from it.</strong> Safety problems can sit in the handling steps rather than in the reaction itself, and a route that works at a small size needs to be checked again when it changes.</p>`],
      ['evidence', 'Supporting evidence', `
<p>This page summarises a short technical report I wrote for the UTFORSK programme at NTNU. The report is not published here.</p>
<details class="more" open><summary>SEM of the later batches</summary>
${fig('ayush-suryawanshi-sem-micrograph-of-agglomerated-catalyst-nanoclusters.jpg', 'SEM micrograph of agglomerated catalyst nanoclusters', 'A later batch at 25,000×: nanoclusters with a rough, raspberry-like surface and none of the sheet-like contamination seen in the first batch.', { sizes: '(min-width: 1100px) 720px, 100vw' })}
${fig('ayush-suryawanshi-two-high-magnification-sem-micrographs.jpg', 'Two high-magnification SEM micrographs', 'Batch 3 at 450,000× and 250,000×. The bright specks are metal particles spread evenly over the carbon support.', { sizes: '(min-width: 1100px) 720px, 100vw' })}
</details>`],
    ],
  },

  /* ------------------------------------------------------------------------ DFT */
  {
    // REVIEW(disclosure): own course project; step energies, method and route line are low risk but
    // unpublished. Confirm with the course instructor if in doubt.
    slug: 'dft-orr-pt13',
    kind: ['computation'],
    kindLabel: 'Modelling and simulation · Course project',
    title: 'Oxygen reduction on a 13-atom platinum cluster',
    short: 'A DFT study of the intermediates of the four-electron oxygen reduction pathway on Pt<sub>13</sub>.',
    description:
      'DFT study by Ayush Suryawanshi of the intermediates of the four-electron oxygen reduction pathway on a Pt13 cluster in Gaussian 16 (UB3LYP), IIT Madras. Electronic energies only.',
    when: 'Jan – May 2025',
    where: 'IIT Madras',
    cardImg: ['ayush-suryawanshi-photo-4972ceff.jpg', 'Energy plot with optimised structures along the oxygen reduction pathway'],
    cardContain: true,
    stats: [
      ['5', 'species optimised on Pt₁₃'],
      ['0', 'imaginary frequencies'],
    ],
    tags: ['DFT', 'Gaussian 16', 'Oxygen reduction'],
    meta: [
      ['Type', 'Course project, Computational Methods in Catalysis'],
      ['Guide', 'Dr. Jithin John Varghese'],
      ['Tools', 'Gaussian 16, Avogadro'],
      ['Method', 'DFT, UB3LYP; LANL2DZ for Pt, 6-31G(d,p) for H and O'],
    ],
    glance: [
      ['Problem', 'Oxygen reduction limits fuel cell cathodes. How do its intermediates sit on a small Pt cluster, and is each step favourable in electronic energy?'],
      ['My contribution', 'Individual course project: built, optimised and checked the Pt<sub>13</sub> structures and the adsorbed intermediates in Gaussian 16 and tabulated the step energies.'],
      ['Key result', 'All four tabulated step energies are negative (−1.85 to −3.90 eV, electronic energies), and all optimised structures are true minima.'],
      ['Limits', 'Gas-phase electronic energies only: no zero-point, thermal or entropy corrections, so not free energies, and no transition states, so no barriers, rates or activity predictions.'],
    ],
    sections: () => [
      ['problem', 'Problem and baseline', `
<p>Oxygen reduction is slow even on platinum, and it is the reaction that limits fuel cell cathodes. Small clusters like Pt<sub>13</sub> have edge and corner sites that behave differently from flat surfaces. The question was how the reaction intermediates sit on such a cluster and whether each step of the associative four-electron pathway is favourable in electronic energy.</p>
<p><strong>Baseline.</strong> The reference point is O<sub>2</sub> adsorbed on the cluster (energy set to zero). Platinum is the benchmark catalyst for this reaction, so the project asks what a small platinum cluster looks like at each stage, not whether it beats another material.</p>`],
      ['contribution', 'My contribution', `
<p>This was an individual project for the course Computational Methods in Catalysis at IIT Madras, guided by Dr. Jithin John Varghese. I built the structures, set up and ran the Gaussian 16 calculations, checked every structure, and tabulated and interpreted the step energies.</p>`],
      ['methods', 'Methods and assumptions', `
<ol class="steps">
  <li><h3>Built the structures</h3><p>The Pt<sub>13</sub> cluster and the O<sub>2</sub>, OOH, O, OH and H<sub>2</sub>O species were built in Avogadro, each placed in a likely binding configuration.</p></li>
  <li><h3>Optimised them</h3><p>Gaussian 16, spin-unrestricted B3LYP, LANL2DZ effective core potential for platinum and 6-31G(d,p) for hydrogen and oxygen. Route: <code>opt=calcall freq ub3lyp/genecp scf=(xqc,maxcycle=512) guess=mix int=ultrafine</code>.</p></li>
  <li><h3>Checked them</h3><p>A frequency calculation on every structure confirmed it was a true minimum, with no imaginary frequencies.</p></li>
  <li><h3>Compared the steps</h3><p>Reaction energies for each step of the associative pathway, from the electronic (SCF) energies of the optimised structures.</p></li>
</ol>
${defs([
  ['Environment', 'Gas phase, no explicit solvation.'],
  ['Energies', 'SCF electronic energies. Zero-point, thermal and entropy corrections were available from the frequency calculations but not applied.'],
  ['Configurations', 'One binding configuration per species is described; a search over adsorption sites or cluster isomers is not reported.'],
  ['Transition states', 'Not located, so the pathway has no activation energies.'],
])}`],
      ['results', 'Results', `
${table(
  'Tabulated step energies (ΔE, electronic energy, eV)',
  ['Step', 'Reaction', 'ΔE (eV)'],
  [
    ['1', 'O<sub>2</sub> adsorption on Pt<sub>13</sub> (reference)', '0'],
    ['2', 'OOH* formation', '−2.84'],
    ['3', 'O* and water formation', '−2.05'],
    ['4', 'OH* formation', '−1.85'],
    ['5', 'Water released, Pt<sub>13</sub> regenerated', '−3.90'],
  ],
)}
${dftChart()}
<p>Every tabulated step energy is negative, which fits the established role of platinum as the benchmark oxygen reduction catalyst and supports using small clusters for mechanistic questions. That is as far as these numbers go.</p>`],
      ['limits', 'Limitations', `
<ul class="tight">
  <li><strong>Not free energies.</strong> Only electronic energies are used, so the values are qualitative trends in relative stability. Zero-point, thermal and entropy terms matter, especially for gas-phase O<sub>2</sub> and H<sub>2</sub>O.</li>
  <li><strong>No barriers, no rates.</strong> Without transition states the calculations say which intermediates are stable, not how fast any step goes, which step limits the reaction, or how active the cluster is. They are not an activity or rate prediction.</li>
  <li><strong>Idealised model.</strong> A single isolated Pt<sub>13</sub> cluster in the gas phase, with no support, solvent or electrode environment.</li>
  <li><strong>Reading the figure.</strong> The original report draws the four tabulated values as points on one smoothed curve. Per-step energies are not cumulative energies, so the curve is a qualitative sketch, and its bends should not be read as barriers.</li>
</ul>
<p class="takeaway"><strong>What I took from it.</strong> A calculation is only as strong as what it includes. Being explicit about what was left out, here free-energy corrections and transition states, is part of reporting it.</p>`],
      ['evidence', 'Supporting evidence', `
<p>This page summarises my course project report. The report, the Gaussian input and output files and the structure files are not published here.</p>
<details class="more"><summary>See the optimised structures</summary>
${fig('ayush-suryawanshi-photo-4972ceff.jpg', 'Plot of the four tabulated step energies against step number, with the optimised structure drawn at each point', 'The optimised structure of each state, as drawn in the project report. The curve is a smoothed guide through the four tabulated values and is not a minimum-energy path: no transition states were calculated.', { sizes: '(min-width: 1100px) 720px, 100vw' })}
</details>`],
    ],
  },

  /* ------------------------------------------------------------------------ SNCR */
  {
    slug: 'sncr-biomass-boiler',
    kind: ['process', 'computation'],
    kindLabel: 'Process engineering · NTNU, team of four',
    title: 'Designing an SNCR retrofit for a biomass boiler',
    short: 'A four-person design study: can selective non-catalytic reduction bring a biomass boiler under its NOx limit, and at what cost?',
    description:
      'SNCR retrofit design study for NOx reduction in a biomass boiler by a four-person NTNU team including Ayush Suryawanshi, for Norwegian industry partners, with Cantera combustion and kinetic models and a cost estimate.',
    when: 'Aug – Nov 2025',
    where: 'NTNU, Trondheim',
    cardImg: ['ayush-suryawanshi-photo-5ee7ac61.jpg', 'Ayush and two teammates beside their SNCR poster', '50% 8%'],
    stats: [
      ['~60%', 'reduction assumed for design (ideal model: above 90%)'],
      ['300', 'mg/Nm³ limit; modelled uncontrolled NOx 280–330'],
    ],
    tags: ['Process design', 'Kinetic modelling', 'Python / Cantera', 'Process economics'],
    meta: [
      ['Type', 'Process design project (TKP4170)'],
      ['Team', 'Four students'],
      ['Supervisor', 'Prof. Øyvind Weiby Gregersen'],
      // REVIEW(disclosure): partner names appear on the publicly presented poster; confirm the partners are
      // happy to be named on a personal site.
      ['Industry partners', 'Billerud Viken; boiler operated by Vardar Varme AS'],
      ['Tools', 'Python, Cantera, Excel'],
      ['Presented at', 'Treforedlingsforum 2025, Oslo'],
    ],
    glance: [
      ['Problem', 'An upgraded biomass boiler must stay under 300 mg/Nm³ NOx, and uncontrolled NOx was modelled at 280–330 mg/Nm³. Could an SNCR retrofit close the gap, and at what cost?'],
      ['My contribution', 'Member of a four-person team and presenter of the poster in Oslo. The report does not itemise who did what, so the method and results below are the team’s work.'],
      ['Key result', 'With a conservative design reduction of about 60% (the ideal model gave above 90%), modelled NOx falls to roughly 100–125 mg/Nm³, under the limit. Capital and running costs were estimated: not profitable at current NOx tax, but justified as a compliance cost.'],
      ['Limits', 'Idealised model (perfect mixing, fixed temperature profile), very limited plant data for comparison, and a design study rather than a plant trial. On-site measurement was recommended.'],
    ],
    hero: ['ayush-suryawanshi-photo-5ee7ac61.jpg', 'Ayush and two teammates standing beside their SNCR poster at a conference', 'With two of my teammates beside our poster at Treforedlingsforum 2025 in Oslo.'],
    heroFit: 'natural',
    sections: () => [
      ['problem', 'Problem and baseline', `
<p>A biomass boiler at a Norwegian industrial site is to be upgraded to supply process steam to a pulp production line. Burning biomass produces NOx, and the plant has to stay under the Norwegian limit of 300 mg/Nm³ (dry, 11% O<sub>2</sub>). The team asked whether a selective non-catalytic reduction (SNCR) retrofit, injecting ammonia into the hot flue gas, could get it there.</p>
<p><strong>Baseline.</strong> The models gave uncontrolled NOx of 333 mg/Nm³ for the baseline feed and 287 mg/Nm³ for the lower feed case. The only plant measurement available for comparison was older and lower than the modelled baseline.</p>`],
      ['contribution', 'My contribution', `
<p>I was one of four authors of the design report and presented the work as a poster at Treforedlingsforum 2025 in Oslo, 18–19 November. The report does not divide the work between authors, so I describe the study as the team’s and do not claim individual parts of the modelling or cost estimate here.</p>`],
      ['methods', 'Methods and assumptions', `
<ol class="steps">
  <li><h3>Checked the starting point</h3><p>Spreadsheet calculations estimated the flame temperature and the time the flue gas spends in the post-combustion zone, to see whether the boiler suits SNCR.</p></li>
  <li><h3>Modelled the combustion</h3><p>A Cantera equilibrium model with the GRI-Mech 3.0 mechanism, with the solid fuels represented by a gas-phase surrogate from their ultimate analysis, predicted flue-gas temperature and uncontrolled NO for two feed cases.</p></li>
  <li><h3>Modelled the SNCR</h3><p>A one-dimensional plug-flow reactor in Python with Cantera and the San Diego Reduced-N mechanism tracked NO reduction and ammonia slip for different injection temperatures and ammonia-to-NOx ratios (NSR).</p></li>
  <li><h3>Designed and costed the system</h3><p>Ammonia was chosen as the reagent for performance and cost. The team laid out storage, mixing and injection, sized the main equipment, set out safety measures and estimated capital and running costs.</p></li>
</ol>
${table(
  'Design assumptions and operating points',
  ['Item', 'Value used'],
  [
    // REVIEW(disclosure): boiler duty, fuel blend, excess air, furnace volume and residence time came from
    // the client's internal documentation and were removed pending clearance from the partners.
    ['SNCR temperature window', 'Reduction rises between 900 and 1000 °C and falls above it; injection recommended at the upper end, 1000–1100 °C'],
    ['Reagent and dose', '25 wt% ammonia solution; start at NSR 1.4 and tune from measurements; equipment sized at NSR 2.0'],
    ['Model simplifications', 'Perfect mixing, fixed temperature profile, steady state: an upper-bound estimate'],
    ['Economics', '8% discount rate, 20-year life, savings measured against the NOx tax'],
  ],
)}`],
      ['results', 'Results', `
${table(
  'Modelled NOx for the two feed cases (mg/Nm³, dry, 11% O₂)',
  ['Case', 'Uncontrolled', 'Controlled', 'Reduction'],
  [
    ['Baseline feed, ideal', '333', '20', '94%'],
    ['Baseline feed, realistic', '333', '124', '63%'],
    ['Lower feed, ideal', '287', '21', '93%'],
    ['Lower feed, realistic', '287', '101', '65%'],
  ],
  { hl: [1, 3], note: 'The “realistic” cases are not an independent prediction: the report tuned the model to about 60% reduction, which it describes as consistent with industrial experience, by running it at an unrealistically high 1400 °C. At that temperature modelled ammonia slip is zero, which the report calls optimistic.' },
)}
<ul class="tight">
  <li><strong>Temperature matters most.</strong> Reduction is limited below about 850 °C, rises quickly between 900 and 1000 °C and falls at higher temperatures as ammonia oxidises. At the cooler end of the window the modelled ammonia slip exceeds 40 mg/Nm³, so the recommendation is to inject near the upper end.</li>
  <li><strong>Reagent and cost.</strong> The baseline case needs about 5800 litres of 25 wt% ammonia solution a month at NSR 1.4, and reagent use dominates running cost. Capital and running costs were estimated with standard cost correlations. At current NOx tax rates the project is not profitable, but the report judges the investment justified as a compliance measure.</li>
  <li><strong>Safety was part of the design.</strong> Ammonia is hazardous, so the design included a moat around the tank, ammonia sensors with alarms that switch off the pumps, emergency showers and enclosed mixing and distribution modules.</li>
  <li><strong>Recommendations.</strong> Measure temperature and uncontrolled NOx on site before tuning, and design for variations in load and fuel.</li>
</ul>`],
      ['limits', 'Limitations', `
<ul class="tight">
  <li><strong>Idealised models.</strong> Perfect mixing, a fixed temperature profile and steady state make the SNCR results an upper bound; real furnaces have imperfect mixing and temperature variation, and real ammonia slip is likely to be higher.</li>
  <li><strong>The 60% is an assumption.</strong> It is a conservative design value chosen from industrial experience, not a result the model produced.</li>
  <li><strong>Thin plant data.</strong> The baseline came from models, with only one older plant measurement for comparison, and the modelled uncontrolled NOx was higher than it.</li>
  <li><strong>High-level costs.</strong> The cost estimates are early-stage, and the report notes that some equipment costs are less accurate than the storage tank estimate.</li>
  <li><strong>A design study.</strong> Nothing here was tested on the boiler.</li>
</ul>
<p class="takeaway"><strong>What I took from it.</strong> This was my first design project for an industry client. It taught me to work from incomplete plant data, state assumptions clearly, and give a recommendation a client can act on, including an honest note that the economics only work as a compliance cost.</p>`],
      ['evidence', 'Supporting evidence', `
<p>This page summarises the team’s TKP4170 design report for NTNU. The report, the poster, the model code and the model outputs are not published here; two model plots are below.</p>
<details class="more"><summary>Model plots</summary>
<div class="fig-row">
${fig('ayush-suryawanshi-plot-of-nox-and-ammonia-slip-against-sncr.jpg', 'Plot of NOx and ammonia slip against SNCR temperature', 'Modelled NOx with and without SNCR across injection temperatures. The dashed line is the 300 mg/Nm³ limit and the shaded band is the usual SNCR window: inject too cold and ammonia slips through, too hot and it burns to NOx itself.', { sizes: '(min-width: 720px) 340px, 100vw' })}
${fig('ayush-suryawanshi-plot-of-no-reduction-and-ammonia-slip-against.jpg', 'Plot of NO reduction and ammonia slip against the normalised stoichiometric ratio', 'More ammonia removes more NO, but past a point the unreacted ammonia slipping through rises steeply. The design dose sits where reduction is high and slip is still low.', { sizes: '(min-width: 720px) 340px, 100vw' })}
</div>
</details>`],
    ],
  },
];

export const kinds = [
  ['all', 'All', ''],
  ['lab', 'Experimental research', 'Making catalysts and electrodes and measuring what they do.'],
  ['computation', 'Modelling and simulation', 'DFT of reaction intermediates and reaction-kinetics models.'],
  ['process', 'Process engineering', 'Designing and choosing processes under cost, safety and emission limits.'],
];
