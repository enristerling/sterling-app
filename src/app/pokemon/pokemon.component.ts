import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
import { Pokemon } from './model/pokemon'



@Component({
  selector: 'app-pokemon',
  providers: [PokemonService],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemon: Pokemon[];
  public errorMsg;

  constructor(private _pokemonService:PokemonService) { }

  ngOnInit() {
    this._pokemonService.getPokemon(0,9)
      .subscribe(data => {this.pokemon = data; console.log(data)},
                 error => this.errorMsg = error);
  }

}
