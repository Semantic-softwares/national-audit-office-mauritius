import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NEWS_DATA, NewsItem } from '../../../../data/news.data';

interface HomeNewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
})
export class NewsSectionComponent {
  news: HomeNewsItem[] = NEWS_DATA.slice(0, 3).map((n: NewsItem) => ({
    slug: n.slug,
    date: new Date(n.date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    category: n.category,
    title: n.title,
    excerpt: n.summary,
    image: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80`,
  }));
}
