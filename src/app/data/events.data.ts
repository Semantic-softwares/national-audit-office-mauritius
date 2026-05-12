export interface EventItem {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  location: string;
  category: EventCategory;
  status: 'upcoming' | 'ongoing' | 'past';
  image?: string;
  summary: string;
  description: string[];
  agenda?: AgendaItem[];
  contact?: string;
}

export interface AgendaItem {
  time: string;
  activity: string;
}

export type EventCategory =
  | 'Conference'
  | 'Workshop'
  | 'Training'
  | 'Seminar'
  | 'Stakeholder Meeting'
  | 'PAC Hearing'
  | 'International';

export const EVENTS_DATA: EventItem[] = [
  {
    slug: 'intosai-capacity-building-2026',
    title: 'INTOSAI Capacity Building Workshop on IT Audit',
    date: '2026-06-10',
    endDate: '2026-06-12',
    time: '09:00 – 17:00',
    location: 'Hennessy Park Hotel, Ebène, Mauritius',
    category: 'International',
    status: 'upcoming',
    summary:
      'A three-day INTOSAI-facilitated workshop on modern IT audit practices, attended by Supreme Audit Institutions from AFROSAI-E member countries.',
    description: [
      'The National Audit Office of Mauritius is hosting a three-day INTOSAI Capacity Building Workshop on IT Audit, bringing together auditors from AFROSAI-E member countries.',
      'Participants will gain practical exposure to IT audit methodologies, data analytics, cybersecurity risk assessment, and the use of computer-assisted audit tools and techniques (CAATs).',
      'The workshop is facilitated by INTOSAI Development Initiative (IDI) experts in partnership with the NAO and will result in participants developing an IT audit plan for their respective SAIs.',
    ],
    agenda: [
      { time: 'Day 1 – 09:00', activity: 'Opening ceremony and introduction to IT audit framework' },
      { time: 'Day 1 – 11:00', activity: 'Session: Understanding IT control environments' },
      { time: 'Day 1 – 14:00', activity: 'Practical exercise: Mapping IT systems in government' },
      { time: 'Day 2 – 09:00', activity: 'Session: Data analytics and CAATs' },
      { time: 'Day 2 – 14:00', activity: 'Hands-on: Using IDEA for audit analytics' },
      { time: 'Day 3 – 09:00', activity: 'Cybersecurity audit methodology' },
      { time: 'Day 3 – 14:00', activity: 'Group presentations and closing ceremony' },
    ],
    contact: 'training@nao.govmu.org',
  },
  {
    slug: 'pac-hearing-q1-2026',
    title: 'Public Accounts Committee Hearing — Q1 2026',
    date: '2026-05-20',
    time: '10:00 – 16:00',
    location: 'National Assembly Building, Port Louis',
    category: 'PAC Hearing',
    status: 'upcoming',
    summary:
      'The Public Accounts Committee convenes to scrutinise the findings of the Annual Audit Report 2024-25, with Accounting Officers from selected ministries in attendance.',
    description: [
      'The Public Accounts Committee (PAC) of the National Assembly will convene to examine the findings reported in the Annual Audit Report for the financial year 2024-25.',
      'Accounting Officers from three ministries identified in the audit report as having significant findings will appear before the Committee to account for the matters raised.',
      'Members of the public may observe the proceedings from the public gallery, subject to available seating.',
    ],
    contact: 'info@nao.govmu.org',
  },
  {
    slug: 'stakeholder-consultation-2026',
    title: 'NAO Annual Stakeholder Consultation 2026',
    date: '2026-04-25',
    time: '09:30 – 13:00',
    location: 'Swami Vivekananda Conference Centre, Pailles',
    category: 'Stakeholder Meeting',
    status: 'past',
    summary:
      'The annual forum where NAO gathers feedback from Accounting Officers, Board Members, and civil society on the quality, relevance and timeliness of audit services.',
    description: [
      'The NAO Annual Stakeholder Consultation brings together representatives of audited entities, civil society organisations, and other interested parties to discuss the NAO\'s work programme and audit priorities.',
      'This year\'s consultation focused on the introduction of risk-based audit planning and the expansion of performance audit coverage to new programme areas.',
      'Feedback gathered at the consultation informs the NAO\'s Strategic Plan and the annual work programme for the forthcoming financial year.',
    ],
    contact: 'info@nao.govmu.org',
  },
  {
    slug: 'performance-audit-training-2026',
    title: 'Performance Audit Methodology Training',
    date: '2026-03-15',
    endDate: '2026-03-19',
    time: '08:30 – 16:30',
    location: 'NAO Training Centre, Port Louis',
    category: 'Training',
    status: 'past',
    summary:
      'A five-day internal training programme for NAO auditors on the ISSAI-compliant performance audit methodology, covering planning, fieldwork, reporting and follow-up.',
    description: [
      'This intensive five-day training programme was delivered by an experienced performance audit practitioner from AFROSAI-E to a cohort of 25 NAO professional staff.',
      'Topics covered included the ISSAI 300 series standards, audit questions and criteria development, evidence collection and analysis, and report writing for performance audits.',
      'Participants completed a practice audit on a selected government programme, applying the methodology in a supervised environment.',
    ],
    contact: 'training@nao.govmu.org',
  },
  {
    slug: 'afrosai-annual-meeting-2025',
    title: 'AFROSAI-E Annual General Assembly 2025',
    date: '2025-11-03',
    endDate: '2025-11-07',
    location: 'Nairobi, Kenya',
    category: 'International',
    status: 'past',
    summary:
      'NAO representatives attended the AFROSAI-E Annual General Assembly, participating in committee sessions and peer reviews with other English-speaking African SAIs.',
    description: [
      'The Director of Audit and two senior officers represented the National Audit Office at the 2025 AFROSAI-E Annual General Assembly held in Nairobi, Kenya.',
      'The Assembly reviewed the progress of member SAIs against the SAI PMF performance framework, discussed the regional capacity building programme, and adopted the strategic plan for 2026-2030.',
      'Mauritius NAO participated in a bilateral peer review exchange with the SAI of Rwanda under the AFROSAI-E peer review programme.',
    ],
    contact: 'info@nao.govmu.org',
  },
  {
    slug: 'public-finance-seminar-2025',
    title: 'Public Finance Management Seminar',
    date: '2025-09-18',
    time: '09:00 – 15:00',
    location: 'Le Méridien Hotel, Pointe-aux-Piments',
    category: 'Seminar',
    status: 'past',
    summary:
      'A joint seminar co-hosted by NAO and the Ministry of Finance on recent developments in public financial management, accrual accounting, and financial reporting standards.',
    description: [
      'The National Audit Office co-hosted this seminar with the Ministry of Finance and Economic Development, bringing together financial controllers, chief accountants, and senior managers from across the public sector.',
      'Key topics included the transition to accrual-basis accounting in line with IPSAS, the new Financial Reporting Act requirements, and the role of internal audit in strengthening controls.',
      'The event was attended by approximately 120 public sector finance professionals.',
    ],
    contact: 'info@nao.govmu.org',
  },
];
