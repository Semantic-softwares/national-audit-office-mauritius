import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { STAFF_DATA, StaffMember } from '../../../data/staff.data';

@Component({
  selector: 'app-staff-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './staff-detail.component.html',
  styleUrl: './staff-detail.component.scss',
})
export class StaffDetailComponent implements OnInit {
  member: StaffMember | undefined;
  notFound = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.member = STAFF_DATA.find((s) => s.slug === slug);
    if (!this.member) this.notFound = true;
  }
}
