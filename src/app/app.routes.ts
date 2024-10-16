import { Routes } from '@angular/router';
import { HomeComponent } from '../presentation/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../presentation/home/home.component').then((c) => c.HomeComponent),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('../presentation/home/base/main/main.component').then(
            (c) => c.MainComponent
          ),
      },
      {
        path: 'Privacidad',
        loadComponent: () =>
          import('../presentation/home/privacity/privacity.component').then(
            (c) => c.PrivacityComponent
          ),
      },
      {
        path: 'Nosotros',
        loadComponent: () =>
          import('../presentation/home/us/us.component').then(
            (c) => c.UsComponent
          ),
      },
      {
        path: 'Contacto',
        loadComponent: () =>
          import('../presentation/home/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },

    ],
  },
];
