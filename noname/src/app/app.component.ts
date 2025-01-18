import { Component } from '@angular/core';
import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { NavModel } from './models/nav-model';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  selector: 'noname-root',
})
export class AppComponent {
  title = 'noname';
  list: NavModel[] = [
    { title: 'Home', url: '/' },
    { title: 'Signals', url: '/signals' },
    { title: 'Contact', url: '/contact' },
  ];
}
