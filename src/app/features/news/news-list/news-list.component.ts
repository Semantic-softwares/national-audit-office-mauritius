import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NEWS_DATA, NewsItem, NewsCategory } from '../../../data/news.data';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
})
export class NewsListComponent {
  activeCategory = signal<NewsCategory | 'All'>('All');

  allNews = NEWS_DATA.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  categories: (NewsCategory | 'All')[] = [
    'All',
    'Audit Reports',
    'International',
    'Capacity Building',
    'Governance',
    'Publications',
    'General',
  ];

  filteredNews = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'All') return this.allNews;
    return this.allNews.filter((n) => n.category === cat);
  });

  setCategory(cat: NewsCategory | 'All') {
    this.activeCategory.set(cat);
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
