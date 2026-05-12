import { Component } from '@angular/core';

interface TimelineEntry {
  era: string;
  year?: string;
  title: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  milestones = [
    { year: '1598', event: 'Dutch discovery of Mauritius' },
    { year: '1715', event: 'French occupation — first public accounts' },
    { year: '1810', event: 'British rule commenced' },
    { year: '1871', event: 'Cessation of Imperial Audit; local audit established' },
    { year: '1968', event: 'Independence — NAO established under Constitution' },
    { year: '1981', event: 'Value for Money audit introduced' },
    { year: '2000s', event: 'IT audit and performance audit expanded' },
    { year: 'Present', event: 'Modern NAO — 200+ entities audited annually' },
  ];

  timeline: TimelineEntry[] = [
    {
      era: 'Present Set Up',
      year: '1968',
      title: 'The National Audit Office (1968 – Present)',
      paragraphs: [
        'The National Audit Office of Mauritius was established on independence in 1968. It is headed by the Director of Audit, an independent Constitutional officer whose appointment and independence are protected under Section 110 of the Constitution of the Republic of Mauritius.',
        'The Director of Audit examines all public accounts of Mauritius, including those of central government ministries and departments, statutory bodies, local authorities, and other public entities, and reports to the National Assembly on the results of those examinations.',
        'The NAO conducts financial, performance, compliance and IT audits and provides independent assurance to the National Assembly that public resources have been used economically, efficiently and effectively in accordance with the relevant laws and regulations.',
      ],
    },
    {
      era: 'Early Development',
      year: '1871',
      title: 'Early Development of Audit in Mauritius',
      paragraphs: [
        `The history of audit in Mauritius dates back to the period of British rule. The island's public accounts were initially subject to review by Imperial auditors from London, reflecting the colonial practice of central financial oversight from the metropolitan power.`,
        'As Mauritius grew in economic importance and administrative complexity, calls for a more locally anchored audit function grew stronger. The transition from imperial to local audit marked a pivotal moment in the development of public financial management in the island.',
        `The evolution of the audit function mirrored the broader development of Mauritius's public administration, moving from simple cash-based accounting to more comprehensive systems of financial accountability.`,
      ],
    },
    {
      era: 'Cessation of Imperial Audit',
      year: '1871',
      title: 'Cessation of Imperial Audit (1871)',
      paragraphs: [
        `In 1871, the Imperial Audit of Mauritius's public accounts was formally discontinued. This followed a broader rationalisation of British colonial audit arrangements, under which responsibility for auditing public accounts was transferred to local institutions.`,
        `The cessation of Imperial Audit created the need for a properly constituted local audit body. This was a landmark step in the island's fiscal autonomy and the beginning of an indigenous public audit capability.`,
      ],
    },
    {
      era: 'Re-organisation',
      year: '1871',
      title: 'Re-organisation of the Audit Department',
      paragraphs: [
        'Following the cessation of Imperial Audit, the Audit Department was re-organised to carry out the audit function locally. The re-organised department was responsible for examining the receipts and expenditure of the colonial government and for reporting any irregularities to the relevant authorities.',
        'This re-organisation laid the foundation for the institutional development that would eventually lead to the fully independent National Audit Office established at independence in 1968.',
      ],
    },
    {
      era: 'Parliamentary Control',
      year: '1900s',
      title: 'Parliamentary Control of Public Finance',
      paragraphs: [
        'A central principle underpinning the work of the audit function in Mauritius — as in other Westminster-tradition jurisdictions — is that Parliament controls public finance. The executive may not raise revenues or incur expenditure without parliamentary authority, and it is to Parliament that the executive must account for its use of public money.',
        'The audit function serves this principle by providing Parliament with an independent assessment of whether the government has accounted for and used public money in accordance with Parliamentary authority. This accountability chain — from taxpayer to Parliament to government — is fundamental to democratic governance.',
      ],
    },
    {
      era: 'Role of PAC',
      year: '1960s',
      title: 'The Role of the Public Accounts Committee',
      paragraphs: [
        `The Public Accounts Committee (PAC) is the Parliamentary committee that scrutinises the Director of Audit's reports. The PAC examines the Accounting Officers of ministries and departments on the findings and recommendations in those reports and can require remedial action to be taken.`,
        'The relationship between the NAO and the PAC is central to the accountability framework. The NAO provides the independent audit findings; the PAC uses those findings to hold the executive accountable; and the executive is required to respond to PAC recommendations through formal ministerial minutes.',
        'This tripartite relationship — NAO, PAC and the executive — is the engine of parliamentary accountability for public money in Mauritius.',
      ],
    },
    {
      era: 'Independence and Powers',
      year: '1968',
      title: 'Independence and Powers of the Director of Audit',
      paragraphs: [
        `The independence of the Director of Audit is a cornerstone of the audit framework. The Constitution of Mauritius protects the Director of Audit's tenure and terms of service, ensuring that the office cannot be unduly influenced by the executive whose expenditure it audits.`,
        'The Director of Audit has the right of access to all accounts, books, vouchers, documents and other records of any Ministry, Department, or public body. No information relevant to an audit may be withheld from the Director of Audit.',
        'This constitutional independence is reinforced by international standards. The Lima Declaration and the Mexico Declaration of INTOSAI both emphasise the necessity of SAI independence as a prerequisite for effective, credible and impartial audit.',
      ],
    },
    {
      era: 'Development of Audit',
      year: '1981 – Present',
      title: 'The Development of Modern Audit Practice',
      paragraphs: [
        'From the early 1980s, the NAO expanded its audit repertoire beyond financial audit to include value-for-money (performance) audit. This reflected international trends and the growing recognition that Parliament and the public needed assurance not only on the propriety of government spending but on its effectiveness.',
        `The NAO has progressively adopted International Standards of Supreme Audit Institutions (ISSAI), issued by INTOSAI. These standards cover financial audit, performance audit, compliance audit, and quality control, providing a globally recognised framework for all aspects of the NAO's work.`,
        'Information technology audit has grown significantly in importance as government services and financial systems have become increasingly computerised. The NAO has invested in developing IT audit expertise to provide assurance on the security, reliability and effectiveness of government IT systems.',
        'Today, the NAO audits over 200 public sector entities, employs more than 150 qualified professionals, and produces an extensive programme of audit reports that inform parliamentary scrutiny and drive improvements in public financial management across the Republic of Mauritius.',
      ],
    },
  ];
}
