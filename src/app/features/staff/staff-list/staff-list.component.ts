import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STAFF_DATA, StaffMember } from '../../../data/staff.data';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss',
})
export class StaffListComponent {
  staff: StaffMember[] = STAFF_DATA;

  departments: string[] = ['All', ...Array.from(new Set(STAFF_DATA.map((s) => s.department)))];
  activeFilter = 'All';

  get filtered(): StaffMember[] {
    return this.activeFilter === 'All'
      ? this.staff
      : this.staff.filter((s) => s.department === this.activeFilter);
  }

  setFilter(dept: string): void {
    this.activeFilter = dept;
  }
}
