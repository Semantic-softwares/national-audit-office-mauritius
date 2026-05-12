import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { REPORT_CATEGORIES, ReportCategory, ReportYear } from '../../../data/reports.data';

@Component({
  selector: 'app-report-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './report-category.component.html',
  styleUrl: './report-category.component.scss',
})
export class ReportCategoryComponent implements OnInit {
  category: ReportCategory | undefined;
  openYear = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('category');
    this.category = REPORT_CATEGORIES.find((c) => c.slug === slug);
    // Auto-open the most recent year
    if (this.category?.years.length) {
      this.openYear.set(this.category.years[0].year);
    }
  }

  toggleYear(year: string) {
    this.openYear.update((current) => (current === year ? null : year));
  }

  totalDocuments(): number {
    return this.category?.years.reduce((sum, y) => sum + y.documents.length, 0) ?? 0;
  }

  openPdf(url: string, event: Event) {
    event.preventDefault();
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
