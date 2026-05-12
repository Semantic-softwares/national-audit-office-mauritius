import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren } from '@angular/core';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss',
})
export class StatsSectionComponent implements OnInit, OnDestroy {
  @ViewChildren('statEl') statEls!: QueryList<ElementRef>;

  displayValues: number[] = [];
  private animationIds: ReturnType<typeof setInterval>[] = [];
  private observer!: IntersectionObserver;
  private animated = false;

  stats: StatItem[] = [
    { value: 56, suffix: '+', label: 'Years of Service', description: 'Auditing public accounts since independence in 1968' },
    { value: 1200, suffix: '+', label: 'Reports Issued', description: 'Comprehensive audit reports submitted to the National Assembly' },
    { value: 300, suffix: '+', label: 'Entities Audited', description: 'Ministries, departments, and state-owned corporations' },
    { value: 98, suffix: '%', label: 'Compliance Rate', description: 'Government bodies adhering to financial regulations' },
  ];

  ngOnInit() {
    this.displayValues = this.stats.map(() => 0);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const host = this.statEls.first?.nativeElement?.closest('section');
    if (host) this.observer.observe(host);
  }

  ngOnDestroy() {
    this.animationIds.forEach(clearInterval);
    this.observer?.disconnect();
  }

  private animateCounters() {
    this.stats.forEach((stat, i) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const id = setInterval(() => {
        current = Math.min(current + increment, stat.value);
        this.displayValues[i] = Math.floor(current);
        if (current >= stat.value) clearInterval(id);
      }, duration / steps);
      this.animationIds.push(id);
    });
  }
}
