import { Component } from '@angular/core';
import {Child} from './components/child/child';

@Component({
  selector: 'app-parent',
  imports: [
    Child
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  public data = 'Data from parent';
  public dataToChild = 'Data to child';

  protected childData = '';

  // Logique de récupération des données.
    protected getDataFromChild(data: string) {
      this.childData = data;
    }
}
