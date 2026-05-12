import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STAFF_DATA } from '../../../../data/staff.data';

interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss',
})
export class TeamSectionComponent {
  members: TeamMember[] = STAFF_DATA
    .filter((s) => s.slug !== 'dharamraj-paligadu')
    .slice(0, 4)
    .map((s) => ({
      slug: s.slug,
      name: s.name,
      role: s.title,
      image: s.image,
      email: s.email,
      phone: s.phone,
    }));
}
