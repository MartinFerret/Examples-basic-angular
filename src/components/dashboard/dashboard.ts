import { Component } from '@angular/core';
import {User} from '../../app/shared/models/user.model';
import {UserCard} from './components/user-card/user-card';

@Component({
  selector: 'app-dashboard',
  imports: [
    UserCard
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected user: User = {firstName: 'John', role: 'admin'};
  protected lastAction = 'Aucune action pour le moment.'

  protected updateLastAction (lastAction: string) {
    this.lastAction = lastAction;
  }
}
