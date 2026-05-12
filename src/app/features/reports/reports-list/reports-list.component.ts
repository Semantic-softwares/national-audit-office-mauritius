import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { REPORT_CATEGORIES, ReportCategory } from '../../../data/reports.data';

@Component({
  selector: 'app-reports-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reports-list.component.html',
  styleUrl: './reports-list.component.scss',
})
export class ReportsListComponent {
  categories = REPORT_CATEGORIES;
  activeFilter = signal<string>('all');

  filteredCategories = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all'
      ? this.categories
      : this.categories.filter((c) => c.slug === filter);
  });

  setFilter(slug: string) {
    this.activeFilter.set(slug);
  }

  latestYearDocuments(category: ReportCategory) {
    if (!category.years.length) return [];
    return category.years[0].documents;
  }

  latestYear(category: ReportCategory): string {
    return category.years[0]?.year ?? '';
  }

  totalDocuments(category: ReportCategory): number {
    return category.years.reduce((sum, y) => sum + y.documents.length, 0);
  }
}
