import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../models/Pokemon'
import { ActivePokemon } from '../../models/ActivePokemon'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon[]
  activePokemon: ActivePokemon

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
    this.http.get<any>(url)
    .subscribe(
      data => {
        this.activePokemon = data
      }
    )
  }

}
