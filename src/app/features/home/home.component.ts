import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { StatsSectionComponent } from './components/stats-section/stats-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { EventsSectionComponent } from './components/events-section/events-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { NewsSectionComponent } from './components/news-section/news-section.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    QuickLinksComponent,
    AboutSectionComponent,
    StatsSectionComponent,
    ServicesSectionComponent,
    EventsSectionComponent,
    TeamSectionComponent,
    NewsSectionComponent,
    CtaBannerComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
