import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../models/Pokemon'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon[]

  pokeApi: string ='https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  ngOnInit():void {
    this.getPokemon()
  }

  getPokemon() {
    this.http.get<any>(this.pokeApi)
    .subscribe(
      data => {
        this.pokemon = data.results
      }
    )
  }

  setActive(url){
    const res = this.http.get<any>(url)
    console.log(res);
  }

}
