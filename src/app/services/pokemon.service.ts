import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Pokemon } from '../models/Pokemon'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon[]

  pokeApi: string ='https://pokeapi.co/api/v2'

  constructor(private http:HttpClient) { }

   getPokemon():Observable<any> {
    return this.http.get<Pokemon[]>(this.pokeApi + '/pokemon')
  }



}
