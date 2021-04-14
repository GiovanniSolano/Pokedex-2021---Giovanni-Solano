import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { Pokemon } from '../../models/pokemon.model';
import * as pokemonStore from '../../store';
import { PokemonesService } from '../../services/pokemones.service';


@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnInit {

  id: number;
  pokemon: Pokemon;
  cargando: boolean;


  constructor(private activatedRoute: ActivatedRoute,
     private store: Store<AppState>,
     private _pokemonService: PokemonesService) {   
    
      this.cargando = false;
      
    this.id = this.activatedRoute.snapshot.params['id'];
 

    this.cargarPokemon();

  }

  cargarPokemon() {
    this.cargando = true;
    this._pokemonService.obtenerPokemonPorNombreOID(this.id)
    .subscribe( resp => {


      this.pokemon = {
        name: resp['name'],
        id: resp['id'],
        detalles: resp
      }

      this.cargando = false;
             

    }, (error) => {
      console.log(error);
      
    });

   

  }

  ngOnInit(): void {       
    
  }


}
