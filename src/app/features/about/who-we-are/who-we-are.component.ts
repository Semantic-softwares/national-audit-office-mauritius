import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss',
})
export class WhoWeAreComponent {
  memberships = [
    {
      name: 'INTOSAI',
      full: 'International Organisation of Supreme Audit Institutions',
      desc: 'The worldwide organisation of government audit institutions, providing standards and best practices for external government audit.',
      flag: '🌐',
    },
    {
      name: 'AFROSAI-E',
      full: 'African Organisation of English-speaking Supreme Audit Institutions',
      desc: 'The regional body facilitating capacity building and knowledge sharing among English-speaking African Supreme Audit Institutions.',
      flag: '🌍',
    },
    {
      name: 'COMESA',
      full: 'Common Market for Eastern and Southern Africa',
      desc: 'NAO participates in the COMESA SAI network, promoting regional cooperation and harmonisation of audit standards.',
      flag: '🌐',
    },
    {
      name: 'COI',
      full: 'Commission de l\'Océan Indien',
      desc: 'Active participation in the Indian Ocean Commission\'s audit cooperation framework for island economies.',
      flag: '🏝️',
    },
  ];

  keyFacts = [
    { value: '1968', label: 'Year Established' },
    { value: '150+', label: 'Professional Staff' },
    { value: '200+', label: 'Entities Audited' },
    { value: '12', label: 'Audit Reports Annually' },
  ];
}
