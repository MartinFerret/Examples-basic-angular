import { Component, signal } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Hero} from '../components/hero/hero';
import {Parent} from '../components/parent/parent';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    Parent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-demo');
  protected firstName = 'John';

  protected count = 0;
  protected countSignal = signal(0);

  protected increment() {
    this.count++;
  }

  protected incrementSignal () {
    this.countSignal.update(count => count + 1);
  }
}
