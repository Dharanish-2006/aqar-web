export const YEARS = ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24']

export const col = (key, label, type = 'text', opts = {}) => ({ key, label, type, ...opts })
export const countWords = (text = '') =>
  text.trim() === '' ? 0 : text.trim().split(/\s+/).length
const C1_METRICS = [
  {
    id: '1.1', title: 'Courses Offered Across All Programs',
    type: 'TBL', modelKey: 'Metric_1_1',
    columns: [
      col('program_code', 'Program Code'),
      col('program_name', 'Program Name'),
      col('course_code', 'Course Code'),
      col('course_name', 'Course Name'),
      col('year_of_introduction', 'Year of Introduction'),
    ],
    docRequired: false,
  },
  {
    id: '1.1.3', title: 'Teachers in Curriculum / Academic Bodies',
    type: 'TBL', modelKey: 'Metric_1_1_3',
    columns: [
      col('year', 'Year'),
      col('teacher_name', 'Name of Teacher'),
      col('body_name', 'Name of Body / Activity'),
    ],
    docRequired: false,
  },
  {
    id: '1.2.1', title: 'Programs with CBCS / Elective Course System',
    type: 'TBL', modelKey: 'Metric_1_2_1',
    columns: [
      col('program_code', 'Program Code'),
      col('program_name', 'Program Name'),
      col('year_introduction', 'Year of Introduction'),
      col('cbcs_status', 'CBCS Status (Yes/No)', 'select', { options: ['Yes', 'No'] }),
      col('cbcs_year', 'Year of Implementation'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: false,
  },
  {
    id: '1.2.2', title: 'Add-on / Certificate Programs & Student Enrolment',
    type: 'TBL', modelKey: 'Metric_1_2_2_1_2_3',
    columns: [
      col('program_name', 'Program Name'),
      col('course_code', 'Course Code'),
      col('year_of_offering', 'Year of Offering'),
      col('times_offered', 'Times Offered During Year', 'number'),
      col('duration', 'Duration of Course'),
      col('students_enrolled', 'Students Enrolled', 'number'),
      col('students_completing', 'Students Completing', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '1.3.2', title: 'Courses with Experiential Learning (Project / Field / Internship)',
    type: 'TBL', modelKey: 'Metric_1_3_2',
    columns: [
      col('program_name', 'Program Name'),
      col('program_code', 'Program Code'),
      col('course_name', 'Course Name'),
      col('course_code', 'Course Code'),
      col('year_offering', 'Year of Offering'),
      col('student_name', 'Student Name'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: false,
  },
  {
    id: '1.3.3', title: 'Students Undertaking Project / Field Work / Internships',
    type: 'TBL', modelKey: 'Metric_1_3_3',
    columns: [
      col('program_name', 'Program Name'),
      col('program_code', 'Program Code'),
      col('student_name', 'Student Name'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: false,
  },
]
const C2_METRICS = [
  {
    id: '2.1', title: 'Students Enrolled During the Year',
    type: 'TBL', modelKey: 'Metric_2_1',
    columns: [
      col('year_of_enrollment', 'Year of Enrollment'),
      col('student_name', 'Student Name'),
      col('enrollment_number', 'Enrollment Number'),
      col('date_of_enrollment', 'Date of Enrollment', 'date'),
    ],
    docRequired: false,
  },
  {
    id: '2.2', title: 'Seats Earmarked for Reserved Category',
    type: 'TBL', modelKey: 'Metric_2_2',
    columns: [
      col('year', 'Year'),
      col('reserved_seats', 'Number of Reserved Seats', 'number'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: true,
  },
  {
    id: '2.3', title: 'Outgoing / Final Year Students',
    type: 'TBL', modelKey: 'Metric_2_3',
    columns: [
      col('year_of_passing', 'Year of Passing'),
      col('student_name', 'Student Name'),
      col('enrollment_number', 'Enrollment Number'),
    ],
    docRequired: false,
  },
  {
    id: '2.1.1', title: 'Enrolment Number — Programme-wise Sanctioned vs Admitted',
    type: 'TBL', modelKey: 'Metric_2_1_1',
    columns: [
      col('program_name', 'Program Name'),
      col('program_code', 'Program Code'),
      col('sanctioned_seats', 'Sanctioned Seats', 'number'),
      col('students_admitted', 'Students Admitted', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '2.1.2', title: 'Seats Filled Against Reserved Categories (SC/ST/OBC/Gen/Others)',
    type: 'TBL', modelKey: 'Metric_2_1_2',
    columns: [
      col('year', 'Year'),
      col('earmarked_sc', 'Earmarked SC', 'number'),
      col('earmarked_st', 'Earmarked ST', 'number'),
      col('earmarked_obc', 'Earmarked OBC', 'number'),
      col('earmarked_gen', 'Earmarked Gen', 'number'),
      col('earmarked_others', 'Earmarked Others', 'number'),
      col('admitted_sc', 'Admitted SC', 'number'),
      col('admitted_st', 'Admitted ST', 'number'),
      col('admitted_obc', 'Admitted OBC', 'number'),
      col('admitted_gen', 'Admitted Gen', 'number'),
      col('admitted_others', 'Admitted Others', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '2.4.1', title: 'Full-Time Teachers — Sanctioned Posts & Experience',
    type: 'TBL', modelKey: 'Metric_2_4_1_2_4_3',
    columns: [
      col('teacher_name', 'Teacher Name'),
      col('pan', 'PAN'),
      col('designation', 'Designation'),
      col('year_of_appointment', 'Year of Appointment'),
      col('nature_of_appointment', 'Nature of Appointment'),
      col('department', 'Department'),
      col('years_of_experience', 'Years of Experience', 'number'),
      col('still_serving', 'Still Serving?'),
    ],
    docRequired: false,
  },
  {
    id: '2.6.3', title: 'Pass Percentage of Students',
    type: 'TBL', modelKey: 'Metric_2_6_3',
    columns: [
      col('year', 'Year'),
      col('program_code', 'Program Code'),
      col('program_name', 'Program Name'),
      col('students_appeared', 'Students Appeared', 'number'),
      col('students_passed', 'Students Passed', 'number'),
    ],
    docRequired: false,
  },
]
const C3_METRICS = [
  {
    id: '3.1', title: 'Full-Time Teachers (Master List)',
    type: 'TBL', modelKey: 'Metric_3_1',
    columns: [
      col('teacher_name', 'Teacher Name'),
      col('id_number', 'ID / Aadhaar'),
      col('email', 'Email', 'email'),
      col('gender', 'Gender', 'select', { options: ['Male', 'Female', 'Other'] }),
      col('designation', 'Designation'),
      col('date_of_joining', 'Date of Joining', 'date'),
      col('sanctioned_posts', 'Sanctioned Posts', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '3.2', title: 'Sanctioned Posts During the Year',
    type: 'TBL', modelKey: 'Metric_3_2',
    columns: [
      col('year', 'Year'),
      col('sanctioned_posts', 'Number of Sanctioned Posts', 'number'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: true,
  },
  {
    id: '2.4.2', title: 'PhD Teachers / Research Guides / PhD Scholars (2.4.2, 3.1.2, 3.3.1)',
    type: 'TBL', modelKey: 'Metric_2_4_2_3_1_2_3_3_1',
    columns: [
      col('teacher_name', 'Teacher Name'),
      col('qualification', 'Qualification (PhD/DM/etc.)'),
      col('qualification_year', 'Year of Qualification'),
      col('is_research_guide', 'Recognised Research Guide?', 'select', { options: ['Yes', 'No'] }),
      col('recognition_year', 'Year of Recognition'),
      col('still_serving', 'Still Serving?'),
      col('scholar_name', 'Scholar Name'),
      col('scholar_reg_year', 'Scholar Registration Year'),
      col('thesis_title', 'Thesis Title', 'textarea'),
    ],
    docRequired: false,
  },
  {
    id: '3.1.1', title: 'Research Grants from Govt / Non-Govt Agencies (3.1.1, 3.1.3)',
    type: 'TBL', modelKey: 'Metric_3_1_1_3_1_3',
    columns: [
      col('project_name', 'Project / Endowment Name'),
      col('pi_name', 'Principal Investigator'),
      col('pi_department', 'PI Department'),
      col('year_of_award', 'Year of Award'),
      col('amount_sanctioned', 'Amount Sanctioned (₹ Lakhs)', 'number'),
      col('duration', 'Duration'),
      col('funding_agency', 'Funding Agency'),
      col('agency_type', 'Agency Type', 'select', { options: ['Government', 'Non-Government'] }),
    ],
    docRequired: false,
  },
  {
    id: '3.2.2', title: 'Workshops / Seminars on Research Methodology, IPR, Entrepreneurship',
    type: 'TBL', modelKey: 'Metric_3_2_2',
    columns: [
      col('year', 'Year'),
      col('seminar_name', 'Workshop / Seminar Name'),
      col('participants', 'Number of Participants', 'number'),
      col('date_from_to', 'Date (From – To)'),
      col('activity_link', 'Activity Report Link', 'url'),
    ],
    docRequired: false,
  },
  {
    id: '3.3.2', title: 'Research Papers in UGC-Listed Journals',
    type: 'TBL', modelKey: 'Metric_3_3_2',
    columns: [
      col('paper_title', 'Title of Paper'),
      col('authors', 'Author(s)', 'textarea'),
      col('department', 'Department'),
      col('journal_name', 'Journal Name'),
      col('year', 'Year of Publication'),
      col('issn', 'ISSN Number'),
      col('ugc_link', 'UGC Enlistment Link', 'url'),
    ],
    docRequired: false,
  },
  {
    id: '3.3.3', title: 'Books, Chapters & Conference Papers per Teacher',
    type: 'TBL', modelKey: 'Metric_3_3_3',
    columns: [
      col('sl_no', 'Sl. No.', 'number'),
      col('teacher_name', 'Teacher Name'),
      col('book_chapter_title', 'Book / Chapter Title'),
      col('paper_title', 'Paper Title'),
      col('proceedings_title', 'Proceedings Title'),
      col('conference_name', 'Conference Name'),
      col('national_international', 'National / International', 'select', { options: ['National', 'International'] }),
      col('year_of_publication', 'Year of Publication'),
      col('isbn_issn', 'ISBN / ISSN'),
      col('publisher', 'Publisher'),
    ],
    docRequired: false,
  },
  {
    id: '3.4.2', title: 'Awards for Extension Activities',
    type: 'TBL', modelKey: 'Metric_3_4_2',
    columns: [
      col('activity_name', 'Activity Name'),
      col('award_name', 'Award / Recognition'),
      col('awarding_body', 'Awarding Body'),
      col('year_of_award', 'Year of Award'),
    ],
    docRequired: false,
  },
  {
    id: '3.4.3', title: 'Extension / Outreach Programmes & Student Participation (3.4.3, 3.4.4)',
    type: 'TBL', modelKey: 'Metric_3_4_3_3_4_4',
    columns: [
      col('activity_name', 'Activity Name'),
      col('organising_agency', 'Organising Agency'),
      col('scheme_name', 'Scheme Name'),
      col('year', 'Year'),
      col('students_participated', 'Students Participated', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '3.5.1', title: 'Collaborative Activities (Research / Faculty / Student Exchange)',
    type: 'TBL', modelKey: 'Metric_3_5_1',
    columns: [
      col('sl_no', 'Sl. No.', 'number'),
      col('activity_title', 'Activity Title'),
      col('collaborating_agency', 'Collaborating Agency', 'textarea'),
      col('participant_name', 'Participant Name'),
      col('year', 'Year'),
      col('duration', 'Duration'),
      col('nature_of_activity', 'Nature of Activity'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: false,
  },
  {
    id: '3.5.2', title: 'Functional MoUs with Institutions / Industries',
    type: 'TBL', modelKey: 'Metric_3_5_2',
    columns: [
      col('organisation', 'Organisation'),
      col('institution_industry', 'Institution / Industry / Corporate House'),
      col('year_of_signing', 'Year of Signing'),
      col('duration', 'Duration'),
      col('activities_under_mou', 'Activities Under MoU', 'textarea'),
      col('participants_count', 'Participants Count', 'number'),
    ],
    docRequired: false,
  },
]
const C4_METRICS = [
  {
    id: '4.1.3', title: 'ICT-Enabled Classrooms and Seminar Halls',
    type: 'TBL', modelKey: 'Metric_4_1_3',
    columns: [
      col('room_name', 'Room Name / Number'),
      col('ict_type', 'Type of ICT Facility'),
      col('photo_link', 'Geotagged Photo Link', 'url'),
    ],
    docRequired: true,
  },
  {
    id: '4.1.4', title: 'Infrastructure Augmentation & Maintenance Expenditure (4.1.4, 4.4.1)',
    type: 'TBL', modelKey: 'Metric_4_1_4_4_4_1',
    columns: [
      col('year', 'Year'),
      col('budget_allocated', 'Budget Allocated (₹ Lakhs)', 'number'),
      col('expenditure_augmentation', 'Expenditure — Augmentation (₹ Lakhs)', 'number'),
      col('total_expenditure_ex_salary', 'Total Expenditure excl. Salary (₹ Lakhs)', 'number'),
      col('maintenance_academic', 'Maintenance — Academic Facilities (₹ Lakhs)', 'number'),
      col('maintenance_physical', 'Maintenance — Physical Facilities (₹ Lakhs)', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '4.2.2', title: 'Library E-Resources Subscriptions & Expenditure (4.2.2, 4.2.3)',
    type: 'TBL', modelKey: 'Metric_4_2_2_4_2_3',
    columns: [
      col('library_resource', 'Library Resource', 'select', {
        options: ['Books', 'Journals', 'e-journals', 'e-books', 'e-ShodhSindhu', 'Shodhganga', 'Databases'],
      }),
      col('membership_details', 'Membership / Subscription Details', 'textarea'),
      col('expenditure_ejournals_ebooks', 'Expenditure — e-journals/e-books (₹ Lakhs)', 'number'),
      col('expenditure_other_eresources', 'Expenditure — Other e-Resources (₹ Lakhs)', 'number'),
      col('total_library_expenditure', 'Total Library Expenditure (₹ Lakhs)', 'number'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: false,
  },
]
const C5_METRICS = [
  {
    id: '5.1.1', title: 'Students Benefited by Scholarships — Govt & Institution (5.1.1, 5.1.2)',
    type: 'TBL', modelKey: 'Metric_5_1_1_5_1_2',
    columns: [
      col('year', 'Year'),
      col('scheme_name', 'Scheme Name'),
      col('govt_students_count', 'Govt Scheme — No. of Students', 'number'),
      col('govt_amount', 'Govt Scheme — Amount (₹)', 'number'),
      col('institution_students_count', 'Institution Scheme — No. of Students', 'number'),
      col('institution_amount', 'Institution Scheme — Amount (₹)', 'number'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: true,
  },
  {
    id: '5.1.3', title: 'Capacity Building & Skills Enhancement Initiatives',
    type: 'TBL', modelKey: 'Metric_5_1_3',
    columns: [
      col('program_name', 'Program Name'),
      col('date_implemented', 'Date of Implementation', 'date'),
      col('students_enrolled', 'Students Enrolled', 'number'),
      col('agency_name', 'Agency / Consultant Name & Contact', 'textarea'),
    ],
    docRequired: false,
  },
  {
    id: '5.1.4', title: 'Guidance for Competitive Exams & Career Counselling',
    type: 'TBL', modelKey: 'Metric_5_1_4',
    columns: [
      col('year', 'Year'),
      col('competitive_exam_activity', 'Competitive Exam Activity'),
      col('competitive_exam_students', 'Students — Competitive Exam', 'number'),
      col('career_counselling_activity', 'Career Counselling Activity'),
      col('career_counselling_students', 'Students — Career Counselling', 'number'),
      col('students_placed_campus', 'Students Placed via Campus', 'number'),
      col('document_link', 'Document Link', 'url'),
    ],
    docRequired: false,
  },
  {
    id: '5.2.1', title: 'Placement of Outgoing Students',
    type: 'TBL', modelKey: 'Metric_5_2_1',
    columns: [
      col('year', 'Year'),
      col('student_name', 'Student Name & Contact'),
      col('program_graduated', 'Program Graduated From'),
      col('employer_name', 'Employer & Contact'),
      col('pay_package', 'Pay Package'),
    ],
    docRequired: false,
  },
  {
    id: '5.2.2', title: 'Students Progressing to Higher Education',
    type: 'TBL', modelKey: 'Metric_5_2_2',
    columns: [
      col('student_name', 'Student Name'),
      col('program_graduated', 'Program Graduated From'),
      col('institution_joined', 'Institution Joined'),
      col('program_admitted', 'Program Admitted To'),
    ],
    docRequired: false,
  },
  {
    id: '5.2.3', title: 'Students Qualifying in State / National / International Exams',
    type: 'TBL', modelKey: 'Metric_5_2_3',
    columns: [
      col('year', 'Year'),
      col('roll_number', 'Roll / Registration Number'),
      col('student_name', 'Student Name'),
      col('net', 'NET', 'number'),
      col('slet', 'SLET', 'number'),
      col('gate', 'GATE', 'number'),
      col('gmat', 'GMAT', 'number'),
      col('cat', 'CAT', 'number'),
      col('gre', 'GRE', 'number'),
      col('jam', 'JAM', 'number'),
      col('ielts', 'IELTS', 'number'),
      col('toefl', 'TOEFL', 'number'),
      col('civil_services', 'Civil Services', 'number'),
      col('state_govt_exams', 'State Govt Exams', 'number'),
      col('other_exams', 'Other Exams', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '5.3.1', title: 'Awards / Medals in Sports & Cultural Activities',
    type: 'TBL', modelKey: 'Metric_5_3_1',
    columns: [
      col('year', 'Year'),
      col('award_name', 'Award / Medal'),
      col('team_or_individual', 'Team / Individual', 'select', { options: ['Team', 'Individual'] }),
      col('level', 'Level', 'select', { options: ['University', 'State', 'National', 'International'] }),
      col('sports_or_cultural', 'Sports / Cultural', 'select', { options: ['Sports', 'Cultural'] }),
      col('student_name', 'Student Name'),
    ],
    docRequired: false,
  },
  {
    id: '5.3.3', title: 'Sports & Cultural Events / Competitions Participated',
    type: 'TBL', modelKey: 'Metric_5_3_3',
    columns: [
      col('event_date', 'Date of Event', 'date'),
      col('event_name', 'Event / Activity Name'),
      col('student_name', 'Student Name'),
    ],
    docRequired: false,
  },
]
const C6_METRICS = [
  {
    id: '6.2.3', title: 'E-Governance Implementation',
    type: 'TBL', modelKey: 'Metric_6_2_3',
    columns: [
      col('area', 'Area of E-Governance', 'select', {
        options: ['Administration', 'Finance and Accounts', 'Student Admission and Support', 'Examination'],
      }),
      col('vendor_details', 'Vendor Name & Contact', 'textarea'),
      col('year_implemented', 'Year of Implementation'),
    ],
    docRequired: false,
  },
  {
    id: '6.3.2', title: 'Financial Support for Teachers — Conferences / Professional Bodies',
    type: 'TBL', modelKey: 'Metric_6_3_2',
    columns: [
      col('year', 'Year'),
      col('teacher_name', 'Teacher Name'),
      col('conference_name', 'Conference / Workshop Name'),
      col('professional_body', 'Professional Body'),
      col('amount', 'Amount (₹)', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '6.3.3', title: 'Professional Development & Administrative Training Programs',
    type: 'TBL', modelKey: 'Metric_6_3_3',
    columns: [
      col('dates', 'Dates (From – To)'),
      col('teaching_program_title', 'Teaching Staff Program Title'),
      col('nonteaching_program_title', 'Non-Teaching Staff Program Title'),
      col('participants_count', 'Number of Participants', 'number'),
    ],
    docRequired: false,
  },
  {
    id: '6.3.4', title: 'Faculty Development Programmes (FDP)',
    type: 'TBL', modelKey: 'Metric_6_3_4',
    columns: [
      col('teacher_name', 'Teacher Name'),
      col('program_title', 'Program Title'),
      col('duration', 'Duration (From – To)'),
    ],
    docRequired: false,
  },
  {
    id: '6.4.2', title: 'Funds / Grants from Non-Government Bodies',
    type: 'TBL', modelKey: 'Metric_6_4_2',
    columns: [
      col('year', 'Year'),
      col('agency_name', 'Agency / Individual Name'),
      col('purpose', 'Purpose of Grant', 'textarea'),
      col('amount', 'Amount (₹ Lakhs)', 'number'),
      col('audit_link', 'Audited Statement Link', 'url'),
    ],
    docRequired: true,
  },
  {
    id: '6.5.3', title: 'Quality Assurance Initiatives — IQAC, NIRF, ISO, NBA',
    type: 'TBL', modelKey: 'Metric_6_5_3',
    columns: [
      col('year', 'Year'),
      col('conferences_seminars', 'Conferences / Seminars on Quality', 'textarea'),
      col('aaa_followup', 'AAA & Follow-up Action', 'textarea'),
      col('nirf_participation', 'NIRF Participation & Status', 'textarea'),
      col('iso_certification', 'ISO Certification Details', 'textarea'),
      col('nba_certification', 'NBA / Other Certification', 'textarea'),
      col('collaborative_quality', 'Collaborative Quality Initiatives', 'textarea'),
      col('orientation_program', 'Orientation Program (Date From–To)', 'textarea'),
    ],
    docRequired: false,
  },
]
export const CRITERIA = [
  {
    key: 'c1', label: 'Criterion I', subtitle: 'Curricular Aspects',
    icon: '📚', color: '#0ea5e9',
    metrics: C1_METRICS,
  },
  {
    key: 'c2', label: 'Criterion II', subtitle: 'Teaching-Learning & Evaluation',
    icon: '🎓', color: '#22c55e',
    metrics: C2_METRICS,
  },
  {
    key: 'c3', label: 'Criterion III', subtitle: 'Research, Innovations & Extension',
    icon: '🔬', color: '#f97316',
    metrics: C3_METRICS,
  },
  {
    key: 'c4', label: 'Criterion IV', subtitle: 'Infrastructure & Learning Resources',
    icon: '🏛️', color: '#a855f7',
    metrics: C4_METRICS,
  },
  {
    key: 'c5', label: 'Criterion V', subtitle: 'Student Support & Progression',
    icon: '🎯', color: '#eab308',
    metrics: C5_METRICS,
  },
  {
    key: 'c6', label: 'Criterion VI', subtitle: 'Governance, Leadership & Management',
    icon: '⚙️', color: '#14b8a6',
    metrics: C6_METRICS,
  },
]

export const ALL_METRICS = CRITERIA.flatMap(c => c.metrics)

export const getMetricById = (id) => ALL_METRICS.find(m => m.id === id)

export const getCriterionByKey = (key) => CRITERIA.find(c => c.key === key)

export const initResponses = () =>
  Object.fromEntries(
    ALL_METRICS.map(m => [m.id, { rows: [], documents: [], saved: false }])
  )

export const isMetricComplete = (metric, response) =>
  response?.rows?.length > 0

export const getCriterionCompletion = (criterion, responses) => {
  const total = criterion.metrics.length
  const done  = criterion.metrics.filter(m => isMetricComplete(m, responses[m.id])).length
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0
  return { done, total, pct }
}

export const getOverallCompletion = (responses) => {
  const total = ALL_METRICS.length
  const done  = ALL_METRICS.filter(m => isMetricComplete(m, responses[m.id])).length
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0
  return { done, total, pct }
}