import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENTS_DATA, EventItem, EventCategory } from '../../../data/events.data';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
})
export class EventsListComponent {
  activeFilter = signal<'all' | 'upcoming' | 'past'>('all');

  allEvents = EVENTS_DATA.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  categories: EventCategory[] = [
    'Conference',
    'Workshop',
    'Training',
    'Seminar',
    'Stakeholder Meeting',
    'PAC Hearing',
    'International',
  ];

  filteredEvents = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.allEvents;
    return this.allEvents.filter((e) => e.status === f);
  });

  setFilter(f: 'all' | 'upcoming' | 'past') {
    this.activeFilter.set(f);
  }

  formatDate(dateStr: string): { day: string; month: string; year: string } {
    const d = new Date(dateStr);
    return {
      day: d.toLocaleDateString('en-GB', { day: '2-digit' }),
      month: d.toLocaleDateString('en-GB', { month: 'short' }),
      year: d.getFullYear().toString(),
    };
  }

  formatDateRange(event: EventItem): string {
    const start = new Date(event.date);
    if (!event.endDate) {
      return start.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
    const end = new Date(event.endDate);
    return `${start.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} – ${end.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  }

  statusLabel(status: string): string {
    const labels: Record<string, string> = {
      upcoming: 'Upcoming',
      ongoing: 'Ongoing',
      past: 'Past Event',
    };
    return labels[status] ?? status;
  }
}
