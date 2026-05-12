import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss',
})
export class VisionComponent {
  pillars = [
    {
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      title: 'Transparency',
      desc: 'We provide open and honest information to the National Assembly and the public, ensuring that audit findings and recommendations are clearly communicated and accessible.',
      color: '#3b82f6',
    },
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Accountability',
      desc: 'We hold government entities answerable for the resources entrusted to them, verifying that public funds are used effectively, efficiently and in accordance with the law.',
      color: '#10b981',
    },
    {
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      title: 'Good Governance',
      desc: 'We contribute to the strengthening of public sector governance frameworks, supporting sound decision-making, risk management, and internal controls across government.',
      color: '#c8a84b',
    },
  ];

  commitments = [
    { label: 'Audit Independence', desc: 'Constitutionally protected independence from the Executive' },
    { label: 'Professional Standards', desc: 'Adherence to ISSAI and international best practices' },
    { label: 'Continuous Improvement', desc: 'Ongoing investment in staff training and audit methodology' },
    { label: 'Stakeholder Engagement', desc: 'Constructive dialogue with audited entities and Parliament' },
  ];
}
