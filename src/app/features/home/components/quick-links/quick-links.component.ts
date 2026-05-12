import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface QuickLink {
  icon: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quick-links.component.html',
  styleUrl: './quick-links.component.scss',
})
export class QuickLinksComponent {
  items: QuickLink[] = [
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Submit a Complaint',
      description: 'Report concerns about misuse of public funds or resources.',
      link: '/contact',
      color: '#1a56db',
    },
    {
      icon: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Download Reports',
      description: 'Access our published audit reports and parliamentary submissions.',
      link: '/reports',
      color: '#c8a84b',
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      title: 'Upcoming Events',
      description: 'Stay informed about NAO events, seminars, and public sessions.',
      link: '/events',
      color: '#e3342f',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Careers at NAO',
      description: 'Join our team and contribute to transparent public governance.',
      link: '/contact',
      color: '#0694a2',
    },
    {
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      title: 'Legislation & GOs',
      description: 'Browse the legal framework governing public finance and auditing.',
      link: '/services',
      color: '#7e3af2',
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Contact NAO',
      description: 'Get in touch with our office for enquiries and media requests.',
      link: '/contact',
      color: '#0f6e3d',
    },
  ];
}
