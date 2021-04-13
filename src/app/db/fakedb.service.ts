import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakedbService {

  constructor() { }

  getPokemon(){
    console.log('hi');

    return [
      {
        id: 1,
        name: "Test"
      }
    ]
  }
}
