export interface ReportDocument {
  title: string;
  pdfUrl: string;
}

export interface ReportYear {
  year: string;
  documents: ReportDocument[];
}

export interface ReportCategory {
  slug: string;
  name: string;
  description: string;
  iconPath: string;
  color: string;
  years: ReportYear[];
}

export const REPORT_CATEGORIES: ReportCategory[] = [
  {
    slug: 'annual-audit-report',
    name: 'Annual Audit Report',
    description:
      'The annual Certificate of Audit and Report of the Director of Audit on the accounts of the Government and public bodies, submitted to the National Assembly.',
    iconPath:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: '#0a1628',
    years: [
      {
        year: '2024-25',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2024-25',
            pdfUrl: 'https://nao.govmu.org/Documents/Annual%20Audit%20Report/2024-25/AAR2425_Government.pdf',
          },
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Rodrigues Regional Assembly for the Financial Year 2024-25',
            pdfUrl: 'https://nao.govmu.org/Documents/Annual%20Audit%20Report/2024-25/AAR2425_RRA.pdf',
          },
        ],
      },
      {
        year: '2023-24',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2023-24',
            pdfUrl: 'https://nao.govmu.org/Documents/Annual%20Audit%20Report/2023-24/AAR2324_Government.pdf',
          },
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Rodrigues Regional Assembly for the Financial Year 2023-24',
            pdfUrl: 'https://nao.govmu.org/Documents/Annual%20Audit%20Report/2023-24/AAR2324_RRA.pdf',
          },
        ],
      },
      {
        year: '2022-23',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2022-23',
            pdfUrl: 'https://nao.govmu.org/Documents/Annual%20Audit%20Report/2022-23/AAR2223_Government.pdf',
          },
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Rodrigues Regional Assembly for the Financial Year 2022-23',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2021-22',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2021-22',
            pdfUrl: '#',
          },
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Rodrigues Regional Assembly for the Financial Year 2021-22',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2020-21',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2020-21',
            pdfUrl: '#',
          },
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Rodrigues Regional Assembly for the Financial Year 2020-21',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2019-20',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2019-20',
            pdfUrl: '#',
          },
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Rodrigues Regional Assembly for the Financial Year 2019-20',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2018-19',
        documents: [
          {
            title:
              'Certificate of Audit & Report of the Director of Audit on the Accounts of the Government for the Financial Year 2018-19',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },

  {
    slug: 'performance-audit-report',
    name: 'Performance Audit Report',
    description:
      'Reports assessing the economy, efficiency, and effectiveness of selected government programmes and projects.',
    iconPath:
      'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: '#1d4ed8',
    years: [
      {
        year: '2024',
        documents: [
          {
            title: 'Performance Audit Report on the National Social Inclusion Foundation',
            pdfUrl: '#',
          },
          {
            title: 'Performance Audit Report on the Road Development Authority — Road Maintenance Programme',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            title: 'Performance Audit Report on the Wastewater Management Authority',
            pdfUrl: '#',
          },
          {
            title: 'Performance Audit Report on the Ministry of Health — Covid-19 Response Procurement',
            pdfUrl: '#',
          },
          {
            title: 'Performance Audit Report on the State Land Development Company',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2022',
        documents: [
          {
            title: 'Performance Audit Report on the Central Water Authority',
            pdfUrl: '#',
          },
          {
            title: 'Performance Audit Report on the Mauritius Tourism Promotion Authority',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2021',
        documents: [
          {
            title: 'Performance Audit Report on the National Housing Development Company',
            pdfUrl: '#',
          },
          {
            title: 'Performance Audit Report on the Transport Services',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2020',
        documents: [
          {
            title: 'Performance Audit Report on the Ministry of Education — ICT Integration in Schools',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },

  {
    slug: 'report-on-performance',
    name: 'Report on Performance',
    description:
      'Thematic reports on the performance of specific government entities and services, providing in-depth analysis of public service delivery.',
    iconPath:
      'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    color: '#059669',
    years: [
      {
        year: '2024',
        documents: [
          {
            title: 'Report on Performance of the Mauritius Revenue Authority',
            pdfUrl: '#',
          },
          {
            title: 'Report on Performance of the State Trading Corporation',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            title: 'Report on Performance of the University of Mauritius',
            pdfUrl: '#',
          },
          {
            title: 'Report on Performance of the Outer Islands Development Corporation',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2022',
        documents: [
          {
            title: 'Report on Performance of the Mauritius Ports Authority',
            pdfUrl: '#',
          },
          {
            title: 'Report on Performance of the Civil Aviation Department',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2021',
        documents: [
          {
            title: 'Report on Performance of the Mauritius Broadcasting Corporation',
            pdfUrl: '#',
          },
          {
            title: 'Report on Performance of the Irrigation Authority',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },

  {
    slug: 'compliance-audit-report',
    name: 'Compliance Audit Report',
    description:
      'Reports on compliance with laws, regulations, policies, and contractual obligations across government ministries and public bodies.',
    iconPath:
      'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    color: '#dc2626',
    years: [
      {
        year: '2024',
        documents: [
          {
            title: 'Compliance Audit Report on the Procurement of Goods and Services — Ministry of Public Infrastructure',
            pdfUrl: '#',
          },
          {
            title: 'Compliance Audit Report on the Management of Public Assets',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2023',
        documents: [
          {
            title: 'Compliance Audit Report on the Use of Emergency Funds',
            pdfUrl: '#',
          },
          {
            title: 'Compliance Audit Report on Grant Management in Local Authorities',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2022',
        documents: [
          {
            title: 'Compliance Audit Report on the Management of Scholarships',
            pdfUrl: '#',
          },
          {
            title: 'Compliance Audit Report on Treasury Operations',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2021',
        documents: [
          {
            title: 'Compliance Audit Report on the State Land Administration',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },

  {
    slug: 'archives',
    name: 'Archives',
    description:
      'Historical audit reports and documents from previous financial years, providing a complete record of audit findings dating back to independence.',
    iconPath:
      'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    color: '#7c3aed',
    years: [
      {
        year: '2015-16',
        documents: [
          {
            title: 'Annual Audit Report — Accounts of the Government 2015-16',
            pdfUrl: '#',
          },
          {
            title: 'Annual Audit Report — Rodrigues Regional Assembly 2015-16',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2014-15',
        documents: [
          {
            title: 'Annual Audit Report — Accounts of the Government 2014-15',
            pdfUrl: '#',
          },
          {
            title: 'Annual Audit Report — Rodrigues Regional Assembly 2014-15',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2013-14',
        documents: [
          {
            title: 'Annual Audit Report — Accounts of the Government 2013-14',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2012-13',
        documents: [
          {
            title: 'Annual Audit Report — Accounts of the Government 2012-13',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2011-12',
        documents: [
          {
            title: 'Annual Audit Report — Accounts of the Government 2011-12',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },

  {
    slug: 'annual-procurement-plan',
    name: 'Annual Procurement Plan',
    description:
      'The National Audit Office\'s annual procurement plans, published in accordance with the Public Procurement Act.',
    iconPath:
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    color: '#d97706',
    years: [
      {
        year: '2025-26',
        documents: [
          {
            title: 'Annual Procurement Plan of the National Audit Office for Financial Year 2025-26',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2024-25',
        documents: [
          {
            title: 'Annual Procurement Plan of the National Audit Office for Financial Year 2024-25',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2023-24',
        documents: [
          {
            title: 'Annual Procurement Plan of the National Audit Office for Financial Year 2023-24',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2022-23',
        documents: [
          {
            title: 'Annual Procurement Plan of the National Audit Office for Financial Year 2022-23',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2021-22',
        documents: [
          {
            title: 'Annual Procurement Plan of the National Audit Office for Financial Year 2021-22',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },

  {
    slug: 'table-of-recommendation',
    name: 'Table of Recommendation',
    description:
      'Consolidated tables listing all audit recommendations made to public entities, tracking implementation status and follow-up actions.',
    iconPath:
      'M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    color: '#0891b2',
    years: [
      {
        year: '2024-25',
        documents: [
          {
            title: 'Table of Recommendations — Government Ministries and Departments 2024-25',
            pdfUrl: '#',
          },
          {
            title: 'Table of Recommendations — Public Bodies 2024-25',
            pdfUrl: '#',
          },
          {
            title: 'Table of Recommendations — Local Authorities 2024-25',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2023-24',
        documents: [
          {
            title: 'Table of Recommendations — Government Ministries and Departments 2023-24',
            pdfUrl: '#',
          },
          {
            title: 'Table of Recommendations — Public Bodies 2023-24',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2022-23',
        documents: [
          {
            title: 'Table of Recommendations — Government Ministries and Departments 2022-23',
            pdfUrl: '#',
          },
          {
            title: 'Table of Recommendations — Public Bodies 2022-23',
            pdfUrl: '#',
          },
        ],
      },
      {
        year: '2021-22',
        documents: [
          {
            title: 'Table of Recommendations — Government Ministries and Departments 2021-22',
            pdfUrl: '#',
          },
        ],
      },
    ],
  },
];
