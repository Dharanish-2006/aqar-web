export const YEARS = ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'];

export const CRITERIA = [
  {
    key: 'part-a',
    label: 'Part A',
    subtitle: 'Basic Information',
    icon: '📋',
    color: '#818cf8',
    gradient: 'linear-gradient(135deg,#4f46e5,#818cf8)',
    metrics: [
      { id: 'A.1', title: 'Basic Information of the Institution', type: 'QlM' },
      { id: 'A.2', title: 'Academic Calendar of the Year', type: 'QlM' },
      { id: 'A.3', title: 'Significant Highlights of the Year', type: 'QlM' },
    ],
  },
  {
    key: 'criterion-1',
    label: 'Criterion I',
    subtitle: 'Curricular Aspects',
    icon: '📚',
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
    metrics: [
      { id: '1.1.1', title: 'Effective implementation of Curriculum & Teaching-Learning Practices', type: 'QlM' },
      { id: '1.1.2', title: 'Number of Certificate/Value added courses offered', type: 'QnM' },
      { id: '1.1.3', title: 'Teachers involved in curriculum redesign/revision', type: 'QnM' },
      { id: '1.2.1', title: 'New programmes introduced by the institution', type: 'QnM' },
      { id: '1.2.2', title: 'Add on/Certificate programs offered during the year', type: 'QnM' },
      { id: '1.3.1', title: 'Integration of crosscutting issues relevant to Gender', type: 'QlM' },
      { id: '1.3.2', title: 'Students undertaking field projects/internships', type: 'QnM' },
      { id: '1.4.1', title: 'Structured feedback from various stakeholders', type: 'QlM' },
    ],
  },
  {
    key: 'criterion-2',
    label: 'Criterion II',
    subtitle: 'Teaching-Learning & Evaluation',
    icon: '🎓',
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg,#0284c7,#38bdf8)',
    metrics: [
      { id: '2.1.1', title: 'Student enrolment and reserved category', type: 'QnM' },
      { id: '2.1.2', title: 'Students from other states and countries', type: 'QnM' },
      { id: '2.2.1', title: 'Student Full Time Teacher Ratio (SFTR)', type: 'QnM' },
      { id: '2.3.1', title: 'Student centric methods used for enhancing learning', type: 'QlM' },
      { id: '2.3.2', title: 'Teachers use of ICT enabled tools for effective teaching', type: 'QlM' },
      { id: '2.3.3', title: 'Mentoring System for students', type: 'QlM' },
      { id: '2.4.1', title: 'Full time teachers against sanctioned posts', type: 'QnM' },
      { id: '2.4.2', title: 'Full time teachers with Ph.D / D.Sc / D.Litt', type: 'QnM' },
      { id: '2.5.1', title: 'Mechanism of internal assessment', type: 'QlM' },
      { id: '2.6.1', title: 'Programme Outcomes and Course Outcomes for all Programmes', type: 'QlM' },
      { id: '2.6.2', title: 'Attainment of POs, PSOs and COs', type: 'QlM' },
      { id: '2.6.3', title: 'Pass percentage of students', type: 'QnM' },
    ],
  },
  {
    key: 'criterion-3',
    label: 'Criterion III',
    subtitle: 'Research, Innovations & Extension',
    icon: '🔬',
    color: '#34d399',
    gradient: 'linear-gradient(135deg,#059669,#34d399)',
    metrics: [
      { id: '3.1.1', title: 'Grants for research projects sponsored by government/non-government', type: 'QnM' },
      { id: '3.1.2', title: 'Teachers recognized as research guides', type: 'QnM' },
      { id: '3.1.3', title: 'Departments having Research Projects from Funding Agencies', type: 'QnM' },
      { id: '3.2.1', title: 'Innovation Ecosystem and Incubation Cell', type: 'QlM' },
      { id: '3.2.2', title: 'Workshops/seminars on Research Methodology, IP, Entrepreneurship', type: 'QnM' },
      { id: '3.3.1', title: 'Number of Ph.Ds awarded by students', type: 'QnM' },
      { id: '3.3.2', title: 'Papers published in peer reviewed journals', type: 'QnM' },
      { id: '3.4.1', title: 'Extension activities in the neighbourhood community', type: 'QlM' },
      { id: '3.4.2', title: 'Awards and recognitions received for extension activities', type: 'QnM' },
      { id: '3.5.1', title: 'Number of Collaborative activities with institutions/industries', type: 'QnM' },
    ],
  },
  {
    key: 'criterion-4',
    label: 'Criterion IV',
    subtitle: 'Infrastructure & Learning Resources',
    icon: '🏛️',
    color: '#fbbf24',
    gradient: 'linear-gradient(135deg,#d97706,#fbbf24)',
    metrics: [
      { id: '4.1.1', title: 'Physical facilities for teaching-learning', type: 'QlM' },
      { id: '4.1.2', title: 'Facilities for cultural and sports activities', type: 'QlM' },
      { id: '4.1.3', title: 'ICT facilities and classrooms with LCD/smart boards', type: 'QnM' },
      { id: '4.1.4', title: 'Expenditure on infrastructure development and augmentation', type: 'QnM' },
      { id: '4.2.1', title: 'Library automation using Integrated Library Management System', type: 'QlM' },
      { id: '4.2.2', title: 'e-resources subscription (National/International databases)', type: 'QnM' },
      { id: '4.3.1', title: 'IT infrastructure for academic activities', type: 'QlM' },
      { id: '4.3.2', title: 'Student-computer ratio (dedicated for student use)', type: 'QnM' },
      { id: '4.4.1', title: 'Expenditure on maintenance of infrastructure', type: 'QnM' },
    ],
  },
  {
    key: 'criterion-5',
    label: 'Criterion V',
    subtitle: 'Student Support & Progression',
    icon: '👥',
    color: '#f87171',
    gradient: 'linear-gradient(135deg,#dc2626,#f87171)',
    metrics: [
      { id: '5.1.1', title: 'Students benefited by scholarships (Government)', type: 'QnM' },
      { id: '5.1.2', title: 'Students benefited by scholarships (Institutional)', type: 'QnM' },
      { id: '5.1.3', title: 'Capacity development and skills enhancement initiatives', type: 'QlM' },
      { id: '5.1.4', title: 'Students benefited by guidance for competitive exams', type: 'QnM' },
      { id: '5.1.5', title: 'Transparent mechanism for timely redressal of grievances', type: 'QlM' },
      { id: '5.2.1', title: 'Students progressing to higher education', type: 'QnM' },
      { id: '5.2.2', title: 'Students qualifying in State/National/International exams', type: 'QnM' },
      { id: '5.2.3', title: 'Students placed through campus placement', type: 'QnM' },
      { id: '5.3.1', title: 'Awards/medals for outstanding performance in sports/cultural', type: 'QnM' },
      { id: '5.3.2', title: 'Student council and its contributions', type: 'QlM' },
      { id: '5.4.1', title: 'Alumni Association activities and contributions', type: 'QlM' },
    ],
  },
  {
    key: 'criterion-6',
    label: 'Criterion VI',
    subtitle: 'Governance, Leadership & Management',
    icon: '⚙️',
    color: '#f472b6',
    gradient: 'linear-gradient(135deg,#be185d,#f472b6)',
    metrics: [
      { id: '6.1.1', title: 'Effective leadership through Vision and Mission', type: 'QlM' },
      { id: '6.1.2', title: 'Effective welfare measures for teaching and non-teaching staff', type: 'QlM' },
      { id: '6.2.1', title: 'Strategic plan and deployment documents', type: 'QlM' },
      { id: '6.2.2', title: 'Functioning of IQAC and quality initiatives', type: 'QlM' },
      { id: '6.2.3', title: 'Implementation of e-governance in areas of operations', type: 'QnM' },
      { id: '6.3.1', title: 'Performance appraisal system for teaching and non-teaching', type: 'QlM' },
      { id: '6.3.2', title: 'Teachers provided financial support for conferences/workshops', type: 'QnM' },
      { id: '6.3.3', title: 'Professional development/administrative training programs', type: 'QnM' },
      { id: '6.4.1', title: 'Financial management and mobilization of resources', type: 'QlM' },
      { id: '6.5.1', title: 'IQAC quality assurance strategies and processes', type: 'QlM' },
      { id: '6.5.2', title: 'Quality initiatives by IQAC for promoting quality culture', type: 'QlM' },
    ],
  },
  {
    key: 'criterion-7',
    label: 'Criterion VII',
    subtitle: 'Institutional Values & Best Practices',
    icon: '🌱',
    color: '#2dd4bf',
    gradient: 'linear-gradient(135deg,#0d9488,#2dd4bf)',
    metrics: [
      { id: '7.1.1', title: 'Measures for promotion of gender equity and sensitization', type: 'QlM' },
      { id: '7.1.2', title: 'Alternate energy initiatives and consumption', type: 'QnM' },
      { id: '7.1.3', title: 'Waste management and water conservation measures', type: 'QlM' },
      { id: '7.1.4', title: 'Green campus initiatives beyond the campus', type: 'QlM' },
      { id: '7.1.5', title: 'Disabled-friendly, barrier free environment', type: 'QlM' },
      { id: '7.1.6', title: 'Quality Audits on environment and energy', type: 'QnM' },
      { id: '7.1.7', title: 'Initiatives for inclusive environment and sensitization', type: 'QlM' },
      { id: '7.2.1', title: 'Best Practices successfully implemented', type: 'QlM' },
      { id: '7.3.1', title: 'Institutional Distinctiveness', type: 'QlM' },
    ],
  },
];

export const TOTAL_METRICS = CRITERIA.reduce((s, c) => s + c.metrics.length, 0);

export const getCriterionByKey = (key) => CRITERIA.find(c => c.key === key);

export const countWords = (str) =>
  str?.trim().split(/\s+/).filter(Boolean).length || 0;

export const isMetricComplete = (metric, response) => {
  if (!response) return false;
  if (metric.type === 'QlM') {
    const words = countWords(response.text);
    return words >= 100 && words <= 200;
  }
  return Object.values(response.data || {}).some(v => v !== '' && v !== null && v !== undefined);
};

export const getCriterionCompletion = (criterion, responses) => {
  const { metrics } = criterion;
  if (!metrics.length) return { done: 0, total: 0, pct: 0 };
  const done = metrics.filter(m => isMetricComplete(m, responses[m.id])).length;
  return { done, total: metrics.length, pct: Math.round((done / metrics.length) * 100) };
};

export const getOverallCompletion = (responses) => {
  let done = 0;
  CRITERIA.forEach(c => {
    c.metrics.forEach(m => {
      if (isMetricComplete(m, responses[m.id])) done++;
    });
  });
  return { done, total: TOTAL_METRICS, pct: Math.round((done / TOTAL_METRICS) * 100) };
};

export const initResponses = () => {
  const r = {};
  CRITERIA.forEach(c => {
    c.metrics.forEach(m => {
      r[m.id] = m.type === 'QlM'
        ? { text: '', documents: [], saved: false }
        : { data: Object.fromEntries(YEARS.map(y => [y, ''])), documents: [], saved: false };
    });
  });
  return r;
};
