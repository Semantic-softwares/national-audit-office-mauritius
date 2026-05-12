import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EVENTS_DATA, EventItem } from '../../../data/events.data';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent implements OnInit {
  event = signal<EventItem | null>(null);
  notFound = signal(false);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = EVENTS_DATA.find((e) => e.slug === slug) ?? null;
    if (found) {
      this.event.set(found);
    } else {
      this.notFound.set(true);
    }
  }

  formatDateRange(event: EventItem): string {
    const start = new Date(event.date);
    if (!event.endDate) {
      return start.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
    const end = new Date(event.endDate);
    return `${start.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} – ${end.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  }

  statusLabel(status: string): string {
    const labels: Record<string, string> = { upcoming: 'Upcoming', ongoing: 'Ongoing', past: 'Past Event' };
    return labels[status] ?? status;
  }
}
