import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../../app/shared/models/user.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user: User = {firstName: '', role: ''};

  @Output() lastAction = new EventEmitter<string>();

  protected sendLastAction () {
    this.lastAction.emit('Contact demandé pour Martin');
  }
}
