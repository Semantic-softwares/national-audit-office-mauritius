import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about-layout/about-layout.component').then(
        (m) => m.AboutLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'who-we-are', pathMatch: 'full' },
      {
        path: 'who-we-are',
        loadComponent: () =>
          import('./features/about/who-we-are/who-we-are.component').then(
            (m) => m.WhoWeAreComponent
          ),
      },
      {
        path: 'mission',
        loadComponent: () =>
          import('./features/about/mission/mission.component').then(
            (m) => m.MissionComponent
          ),
      },
      {
        path: 'vision',
        loadComponent: () =>
          import('./features/about/vision/vision.component').then(
            (m) => m.VisionComponent
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./features/about/history/history.component').then(
            (m) => m.HistoryComponent
          ),
      },
    ],
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./features/reports/reports-list/reports-list.component').then(
        (m) => m.ReportsListComponent
      ),
  },
  {
    path: 'reports/:category',
    loadComponent: () =>
      import('./features/reports/report-category/report-category.component').then(
        (m) => m.ReportCategoryComponent
      ),
  },
  {
    path: 'legislations',
    loadComponent: () =>
      import('./features/legislations/legislations.component').then(
        (m) => m.LegislationsComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./features/events/events-list/events-list.component').then(
        (m) => m.EventsListComponent
      ),
  },
  {
    path: 'events/:slug',
    loadComponent: () =>
      import('./features/events/event-detail/event-detail.component').then(
        (m) => m.EventDetailComponent
      ),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./features/news/news-list/news-list.component').then(
        (m) => m.NewsListComponent
      ),
  },
  {
    path: 'news/:slug',
    loadComponent: () =>
      import('./features/news/news-detail/news-detail.component').then(
        (m) => m.NewsDetailComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'report-concern',
    loadComponent: () =>
      import('./features/report-concern/report-concern.component').then(
        (m) => m.ReportConcernComponent
      ),
  },
  {
    path: 'staff',
    loadComponent: () =>
      import('./features/staff/staff-list/staff-list.component').then(
        (m) => m.StaffListComponent
      ),
  },
  {
    path: 'staff/:slug',
    loadComponent: () =>
      import('./features/staff/staff-detail/staff-detail.component').then(
        (m) => m.StaffDetailComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
