import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../models/Pokemon'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon[]

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {

    const res = this.pokemonService.getPokemon()
    .subscribe(
      data =>
      {
        this.pokemon = data.results
      }
    )

  }

}
