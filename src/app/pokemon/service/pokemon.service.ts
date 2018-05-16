import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Pokemon } from '../model/pokemon'

@Injectable()
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemonByNameOrId() {
    return this.http.get(this.baseUrl).map(res => {
      console.log(res);
        var pokemon = new Pokemon(res["id"], res["name"], res["sprites"]["front_default"]);
        return pokemon;
    })
      .catch(this.errorHandler);
  }

  getPokemon(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .map(res => {
        let items = res['results'];

        console.log(items);
        return items.map((item, idx) => {
          const id: number = idx + offset + 1;

          return new Pokemon(id, item.name, `${this.baseSpriteUrl}${id}.png`);
        });
      })
      .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
