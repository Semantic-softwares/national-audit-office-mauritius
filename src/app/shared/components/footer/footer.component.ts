import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About NAO', path: '/about' },
    { label: 'Audit Reports', path: '/reports' },
    { label: 'Services', path: '/services' },
    { label: 'Events', path: '/events' },
    { label: 'News & Media', path: '/news' },
    { label: 'Contact Us', path: '/contact' },
  ];

  services = [
    { label: 'Financial Audit', path: '/services' },
    { label: 'Performance Audit', path: '/services' },
    { label: 'Compliance Audit', path: '/services' },
    { label: 'IT Audit', path: '/services' },
    { label: 'Special Investigations', path: '/services' },
    { label: 'Circulars & GOs', path: '/services' },
  ];
}
