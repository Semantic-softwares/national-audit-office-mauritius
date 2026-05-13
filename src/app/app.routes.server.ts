import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'reports/:category', renderMode: RenderMode.Server },
  { path: 'events/:slug',      renderMode: RenderMode.Server },
  { path: 'news/:slug',        renderMode: RenderMode.Server },
  { path: 'staff/:slug',       renderMode: RenderMode.Server },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
