import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NEWS_DATA, NewsItem } from '../../../data/news.data';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.scss',
})
export class NewsDetailComponent implements OnInit {
  article = signal<NewsItem | null>(null);
  notFound = signal(false);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = NEWS_DATA.find((n) => n.slug === slug) ?? null;
    if (found) {
      this.article.set(found);
    } else {
      this.notFound.set(true);
    }
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
