import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { SignalsComponent } from './signals/signals/signals.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals/signals.component').then(
        m => m.SignalsComponent
      ),
  },
];
