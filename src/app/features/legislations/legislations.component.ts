import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface LegislationSection {
  id: string;
  heading: string;
  content: LegislationContent[];
}

interface LegislationContent {
  type: 'paragraph' | 'list' | 'subheading' | 'sub-subheading';
  text?: string;
  items?: string[];
}

@Component({
  selector: 'app-legislations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './legislations.component.html',
  styleUrl: './legislations.component.scss',
})
export class LegislationsComponent {
  openSection = signal<string | null>('independence');

  toggle(id: string) {
    this.openSection.update((curr) => (curr === id ? null : id));
  }

  acts = [
    'The Constitution',
    'The Finance and Audit Act',
    'The Statutory Bodies (Accounts and Audit) Act',
    'The Local Government Act',
    'The Public Procurement Act',
    'The Financial Reporting Act',
  ];

  sections: LegislationSection[] = [
    {
      id: 'independence',
      heading: 'Independence',
      content: [
        {
          type: 'paragraph',
          text: `The independence of the Director of Audit is enshrined in the Constitution of the Republic of Mauritius and the Finance and Audit Act through specific provisions for the appointment, removal from office, security of tenure as well as protection from liability against legal proceedings, in the execution of his functions.`,
        },
        { type: 'subheading', text: 'The Constitution' },
        {
          type: 'paragraph',
          text: `Section 110 of the Constitution provides for the appointment of a Director of Audit, whose Office shall be a Public Office and who shall be appointed by the Public Service Commission, acting after consultation with the Prime Minister and the Leader of Opposition. Provision is also made that in the exercise of his functions, the Director of Audit shall not be subject to the direction or control of any person or authority.`,
        },
        {
          type: 'paragraph',
          text: `As per Section 93, the Director of Audit may not be removed from office before the legal retirement age except where a tribunal, consisting of at least three sitting or former judges of the Supreme Court appointed by the President in accordance with Section 93(4) of the Constitution, recommends that the Director of Audit ought to be removed from office for inability to discharge the functions of his office or for misbehaviour.`,
        },
        { type: 'subheading', text: 'Finance and Audit Act' },
        {
          type: 'paragraph',
          text: `Section 17A of the Finance and Audit Act provides that no action shall lie against the Office of the Director of Audit, the Director of Audit or any officer of his staff, in respect of any act done or omitted to be done by the Office of the Director of Audit and by the Director of Audit or any officer of his staff during or after his appointment, in the execution in good faith, of its or his functions under the Act. This shall be in addition to and not in derogation of the Public Officers' Protection Act.`,
        },
      ],
    },
    {
      id: 'audit-mandate',
      heading: 'Audit Mandate',
      content: [
        {
          type: 'paragraph',
          text: `The mandate of NAO is established in the Constitution of Mauritius and several legislations. Agreements with several institutions/donor-funded projects also empower the Director of Audit to audit their accounts.`,
        },
        {
          type: 'paragraph',
          text: 'The Director of Audit has the responsibility to audit:',
        },
        {
          type: 'list',
          items: [
            'All Ministries and Government Departments',
            'All Commissions of the Rodrigues Regional Assembly',
            'All Local Authorities',
            'Most Statutory Bodies (currently, 113 out of the 127 Statutory Bodies)',
            '18 Special Funds',
            'Other Bodies and Donor-funded Projects',
            'A few State-owned Companies',
          ],
        },
        {
          type: 'paragraph',
          text: 'The main legal provisions regarding the mandate of NAO are embodied in:',
        },
        { type: 'subheading', text: 'The Constitution' },
        {
          type: 'paragraph',
          text: `Section 110(2) of the Constitution provides that the public accounts of Mauritius and of all Courts of law and all authorities and officers of the Government shall be audited and reported on by the Director of Audit. In the case of any body corporate directly established by law, the accounts of that body corporate shall be audited and reported on by the Director of Audit provided it is so prescribed.`,
        },
        { type: 'subheading', text: 'Finance and Audit Act' },
        {
          type: 'paragraph',
          text: 'Section 16 of the Finance and Audit Act provides that the Director of Audit shall satisfy himself that:',
        },
        {
          type: 'list',
          items: [
            'All reasonable precautions have been and are taken to safeguard the collection of public money',
            'All laws, directions or instructions relating to public money have been and are duly observed',
            'All money appropriated or otherwise disbursed is applied to the purpose for which Parliament intended to provide and that the expenditure conforms to the authority which governs it',
            'Adequate directions or instructions exist for the guidance of public officers entrusted with duties and functions connected with finance or storekeeping and that such directions or instructions have been and are duly observed',
            'Satisfactory management measures have been and are taken to ensure that resources are procured economically and utilised efficiently and effectively',
          ],
        },
        {
          type: 'paragraph',
          text: `Section 16(1A) of the Act requires the Director of Audit to carry out Performance Audit and to report on the extent to which a Ministry, Department or Division is applying its resources and carrying out its operations economically, efficiently and effectively.`,
        },
        {
          type: 'paragraph',
          text: `Section 16(2) provides that the Director of Audit shall not be required to undertake any examination of accounts partaking of the nature of a pre-audit and involving acceptance by him of responsibility which would preclude him from full criticism of any accounting transactions after those transactions have been duly recorded.`,
        },
        { type: 'subheading', text: 'Statutory Bodies (Accounts and Audit) Act' },
        {
          type: 'paragraph',
          text: `As per Section 5 of the Statutory Bodies (Accounts and Audit) Act, every Board shall for every financial year, with the approval of the Minister to whom the responsibility for the statutory body is assigned, appoint an auditor to audit the financial statements of the statutory body. This does not apply where the enactment establishing the statutory body provides that the Director of Audit shall audit its financial statements.`,
        },
        {
          type: 'paragraph',
          text: 'As per Section 8 of the Act, the Director of Audit shall report to the Board whether:',
        },
        {
          type: 'list',
          items: [
            'He has obtained all the information and explanations which to the best of his knowledge and belief were necessary for the purpose of the audit',
            'In his opinion, the financial statements give a true and fair view of the financial performance of the statutory body for the financial year and of its financial position at the end of the financial year',
            'This Act and any directions of the Minister, in so far as they relate to the accounts, have been complied with',
            'In his opinion, any expenditure incurred is of an extravagant or wasteful nature, judged by normal commercial practice and prudence',
            'In his opinion, the statutory body has been applying its resources and carrying out its operations economically, efficiently and effectively',
          ],
        },
        {
          type: 'paragraph',
          text: `Section 8A further provides that the Director of Audit may, where he considers appropriate, send to the Minister to whom responsibility for the subject of finance is assigned a consolidated audit report on the accounts of statutory bodies and the Minister shall cause the report to be laid before the National Assembly.`,
        },
        { type: 'subheading', text: 'The Local Government Act' },
        {
          type: 'paragraph',
          text: `Section 136 of the Local Government Act provides that the approved annual financial statements of every local authority shall be audited by the Director of Audit.`,
        },
        {
          type: 'paragraph',
          text: `Section 138 of the Act requires the Director of Audit to make a report to the Council on the financial statements which have been audited. The report shall state:`,
        },
        {
          type: 'list',
          items: [
            'The work done by him',
            'The scope and limitations of the audit',
            'Whether he has obtained all information and explanations that he has required',
            'Whether the instructions of the Minister, if any, in regard to the financial statements have been complied with',
            'Whether any item of account is contrary to law',
            'Whether any loss or deficiency is wholly or partly due to the negligence or misconduct of any person',
            'Whether any sum which ought to have been brought to account has, due to wilful default or negligence, not been brought into account',
            'Whether there has been any failure to recover any rate, fee or other charge in the manner specified in Section 101 of the Act',
            'Whether the local authority has applied its resources and carried out its operations economically, efficiently and effectively',
            'Whether the financial statements give a true and fair view of the matters to which they relate',
          ],
        },
        {
          type: 'paragraph',
          text: `Section 138(6) provides that the Director of Audit may, where he considers appropriate, send a consolidated audit report on the accounts of every local authority to the Minister who shall cause the report to be laid before the National Assembly.`,
        },
        { type: 'subheading', text: 'Public Procurement Act' },
        {
          type: 'paragraph',
          text: `Section 42 of the Public Procurement Act provides that the auditor of every public body shall state in his annual report whether the provisions of Part V of the Act regarding the bidding process have been complied with.`,
        },
      ],
    },
    {
      id: 'access-to-information',
      heading: 'Access to Information',
      content: [
        {
          type: 'paragraph',
          text: `Provisions are made in the Constitution and other legislations to ensure that the Director of Audit and his staff have access to all information necessary for audit.`,
        },
        { type: 'subheading', text: 'The Constitution' },
        {
          type: 'paragraph',
          text: `Section 110(2) of the Constitution provides for the Director of Audit or any other person authorised by him in that behalf to have access to all books, records, reports and other documents relating to accounts to be audited by him.`,
        },
        { type: 'subheading', text: 'Finance and Audit Act' },
        {
          type: 'paragraph',
          text: 'Section 17(1) of the Finance and Audit Act provides that, in the exercise of his duties, the Director of Audit may:',
        },
        {
          type: 'list',
          items: [
            'Call upon any public officer for any explanations and information which he may require in order to enable him to discharge his duties',
            'With the concurrence of the head of any Ministry or Department, authorise an officer of that Ministry or Department to conduct on his behalf any inquiry, examination or audit and such officer shall report thereon to the Director of Audit',
            'Without payment of any fee, cause searches to be made in, and extracts to be taken from, any document in the custody of any public officer',
            'Lay before the Attorney-General a case in writing as to any question regarding the interpretation of any enactment concerning the powers of the Director of Audit or the discharge of his duties and the Attorney-General shall give a written opinion on such case',
          ],
        },
        { type: 'subheading', text: 'Statutory Bodies (Accounts and Audit) Act' },
        {
          type: 'paragraph',
          text: `Section 6(1) of the Statutory Bodies (Accounts and Audit) Act provides that every auditor shall have access, at all reasonable times, to all the books and accounts of the statutory body, all vouchers in support of them, and all relevant books, papers, and writings in the possession or control of the Board relating to them.`,
        },
        {
          type: 'paragraph',
          text: `Section 6(2) provides that the auditor may require, from all the members of the Board and all officers, agents and employees of the statutory body, such information and explanations as may be necessary for the purpose of the examination or audit.`,
        },
        { type: 'subheading', text: 'The Local Government Act' },
        {
          type: 'paragraph',
          text: `Section 137(1) of the Local Government Act provides that the Director of Audit shall have access at all reasonable times to all Council minutes, information systems, books and accounts of the Local Authority, all vouchers in support of them, all deeds, contracts and other documents, and all relevant papers and writings in the possession or control of the Local Authority.`,
        },
        {
          type: 'paragraph',
          text: 'Section 137(2) provides that the Director of Audit may, orally or in writing, request:',
        },
        {
          type: 'list',
          items: [
            'Any person holding or accountable for any such document to appear before him at the audit or any adjournment',
            'From any member of the Council or any officer or agent of a Local Authority, such information and explanations as may be necessary for the purpose of the audit',
            'Any such person to make and sign a declaration as to the correctness of a document',
          ],
        },
        {
          type: 'paragraph',
          text: `Section 137(3) provides that any person who wilfully neglects or refuses to comply with any request made under subsection (2) shall commit an offence.`,
        },
        { type: 'subheading', text: 'Public Procurement Regulations' },
        {
          type: 'paragraph',
          text: `Regulation 69 provides that the report and the register of procurement proceedings, as well as the documents generated in the planning and procurement proceedings and implementing procurement contracts, shall be made available for inspection to the Policy Office and the Director of Audit.`,
        },
      ],
    },
  ];
}
