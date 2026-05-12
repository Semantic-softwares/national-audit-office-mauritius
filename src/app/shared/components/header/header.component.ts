import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface DropdownItem {
  label: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  dropdown?: DropdownItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnDestroy {
  mobileMenuOpen = signal(false);
  scrolled = signal(false);
  activeDropdown = signal<string | null>(null);
  mobileOpenDropdown = signal<string | null>(null);

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  navLinks: NavLink[] = [
    {
      label: 'About',
      path: '/about',
      dropdown: [
        { label: 'Mission', path: '/about/mission' },
        { label: 'Vision', path: '/about/vision' },
        { label: 'Who We Are', path: '/about/who-we-are' },
        { label: 'Director of Audit', path: '/staff/dharamraj-paligadu' },
        { label: 'Senior Staff', path: '/staff' },
        { label: 'History', path: '/about/history' },
      ],
    },
    {
      label: 'Reports & Publications',
      path: '/reports',
      dropdown: [
        { label: 'Annual Audit Report', path: '/reports/annual-audit-report' },
        { label: 'Performance Audit Report', path: '/reports/performance-audit-report' },
        { label: 'Report on Performance', path: '/reports/report-on-performance' },
        { label: 'Compliance Audit Report', path: '/reports/compliance-audit-report' },
        { label: 'Archives', path: '/reports/archives' },
        { label: 'Annual Procurement Plan', path: '/reports/annual-procurement-plan' },
        { label: 'Table of Recommendation', path: '/reports/table-of-recommendation' },
      ],
    },
    { label: 'Legislations', path: '/legislations' },
    { label: 'Events', path: '/events' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
    this.mobileOpenDropdown.set(null);
  }

  openDropdown(label: string) {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    this.activeDropdown.set(label);
  }

  closeDropdown() {
    this.closeTimer = setTimeout(() => {
      this.activeDropdown.set(null);
      this.closeTimer = null;
    }, 150);
  }

  toggleMobileDropdown(label: string) {
    this.mobileOpenDropdown.update((current) => (current === label ? null : label));
  }

  ngOnDestroy() {
    if (this.closeTimer) clearTimeout(this.closeTimer);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
    this.activeDropdown.set(null);
  }
}
