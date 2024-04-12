import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restograde-angular';
}
