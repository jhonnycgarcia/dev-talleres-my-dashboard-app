import { Routes } from '@angular/router';

/**
 * https://gist.github.com/Klerith/14b347adc335ce33d9b6bbda1a7efd9f
 */

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent : () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection-page/change-detection-page.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow-page/control-flow-page.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options-page/defer-options-page.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views-page/defer-views-page.component'),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () => import('./dashboard/pages/view-transition-page/view-transition-page.component'),
      },
      {
        path:'', redirectTo: 'control-flow', pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
