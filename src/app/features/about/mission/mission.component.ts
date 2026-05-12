import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  standalone: true,
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent {
  values = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Independence',
      desc: 'We operate free from political influence, ensuring our audit opinions are objective and impartial, protected by the Constitution of Mauritius.',
    },
    {
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Integrity',
      desc: 'We uphold the highest ethical standards in all our work, maintaining honesty and transparency in our relationships with all stakeholders.',
    },
    {
      icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      title: 'Quality',
      desc: 'We are committed to delivering audit work of the highest professional standard, adhering to International Standards of Supreme Audit Institutions (ISSAI).',
    },
    {
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Professionalism',
      desc: 'Our staff are qualified, experienced, and committed professionals who continuously develop their skills to meet evolving challenges in public sector auditing.',
    },
  ];

  objectives = [
    'Provide independent and objective assurance to the National Assembly on the use of public resources',
    'Deliver high-quality financial, performance, compliance, and IT audit services across the public sector',
    'Promote improvements in public financial management, governance, and accountability',
    'Build institutional capacity through continuous professional development of staff',
    'Strengthen international cooperation through active participation in INTOSAI, AFROSAI-E and regional bodies',
    'Adopt modern audit methodologies and leverage technology to enhance audit effectiveness',
  ];
}
