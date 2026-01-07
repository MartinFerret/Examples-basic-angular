import { Component, inject } from '@angular/core';
import {PersonHero} from '../../app/shared/models/person.model';
import {HeroService} from '../../app/shared/services/hero';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [
    FormsModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  protected name = 'Martin';

  // constructor (private heroService: HeroService) {}
  private heroService = inject(HeroService);

  protected hero: PersonHero = {
    id: 1,
    name: 'Superman',
    power: 'Super strength',
    isAlive: true
  }

  public superman = 'Superman';
  private batman = 'Batman';

  getBatman () {
    return this.batman;
  }
}
