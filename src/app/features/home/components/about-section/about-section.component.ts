import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  highlights = [
    'Independent constitutional body established in 1968',
    'Auditing over 300 public entities including ministries and parastatals',
    'Internationally recognised ISSAI auditing standards',
    'Annual reports submitted directly to the National Assembly',
  ];
}
