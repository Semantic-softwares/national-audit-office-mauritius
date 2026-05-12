import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  secondaryCta: string;
  secondaryCtaLink: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  slides: Slide[] = [
    {
      title: 'Accountability &',
      subtitle: 'Transparency in Public Finance',
      description:
        'The National Audit Office safeguards public funds and promotes good governance through rigorous, independent auditing of government entities.',
      cta: 'Explore Audit Reports',
      ctaLink: '/reports',
      secondaryCta: 'Learn About NAO',
      secondaryCtaLink: '/about',
    },
    {
      title: 'Independent Auditing',
      subtitle: 'For Better Governance',
      description:
        'We carry out value-for-money audits, financial audits, and compliance audits to ensure public resources are managed efficiently and effectively.',
      cta: 'Our Services',
      ctaLink: '/services',
      secondaryCta: 'Meet Our Team',
      secondaryCtaLink: '/about',
    },
    {
      title: 'Serving the People',
      subtitle: 'of Mauritius Since 1968',
      description:
        'As a constitutional body, the National Audit Office upholds the highest standards of auditing practice to strengthen public sector accountability.',
      cta: 'Latest Reports',
      ctaLink: '/reports',
      secondaryCta: 'Upcoming Events',
      secondaryCtaLink: '/events',
    },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide.update((s) => (s + 1) % this.slides.length);
    }, 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
