import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EVENTS_DATA, EventItem } from '../../../../data/events.data';

interface HomeEventItem {
  slug: string;
  date: { day: string; month: string; year: string };
  time: string;
  title: string;
  location: string;
  category: string;
}

@Component({
  selector: 'app-events-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events-section.component.html',
  styleUrl: './events-section.component.scss',
})
export class EventsSectionComponent {
  events: HomeEventItem[] = EVENTS_DATA.slice(0, 4).map((e: EventItem) => {
    const d = new Date(e.date);
    return {
      slug: e.slug,
      date: {
        day: d.toLocaleDateString('en-GB', { day: '2-digit' }),
        month: d.toLocaleDateString('en-GB', { month: 'short' }),
        year: d.getFullYear().toString(),
      },
      time: e.time ?? '',
      title: e.title,
      location: e.location,
      category: e.category,
    };
  });
}
