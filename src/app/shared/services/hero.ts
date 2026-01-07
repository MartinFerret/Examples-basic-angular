import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  helloWorld() {
    return 'Hello World';
  }
}
