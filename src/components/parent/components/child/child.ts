import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() dataFromParent: string = '';
  @Input() dataAgainFromParent: string = '';

  @Output() stringToParent = new EventEmitter<string>();

  // Afficher les données en mode liste.

  giveStringToParent() {
    // Envoyer une string au parent.
    this.stringToParent.emit('Data from @Output from child component.');
  }
}
