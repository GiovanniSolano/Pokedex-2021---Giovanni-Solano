import { Component, OnInit } from '@angular/core';


import * as desdeStore from '../../store';
import { AppState } from '../../store';
import {  Pokemon } from '../../models/pokemon.model';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PokemonesService } from '../../services/pokemones.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  pokemones: Pokemon[] = [];
  pokemon: Pokemon;
  desabilitar: boolean;
  isLoading: Observable<boolean>;
  isLoaded: Observable<boolean>;
  cargados: Observable<boolean>;
  cargandoTipos: boolean;
  hasta: number;
  totalRegistros: number;


  constructor( public store: Store<AppState>,
     private _pokemonesService: PokemonesService,
     private _snackBar: MatSnackBar) {

    
    this.cargandoTipos = false;
    this.hasta = 0;
    this.desabilitar = false;
    this.getPokemones();



      this.isLoading = this.store.pipe(
        select((state: AppState) => state.pokemones.loading)
        );

        this._pokemonesService.getTotalRegistros().subscribe(resp => {
          this.totalRegistros = resp;          
        });

    }


    ngOnInit(): void {      
      this.store.dispatch(new desdeStore.CargarPokemones(this.hasta));    


      this.isLoaded = this.store.pipe(
        select((state: AppState) => state.pokemones.loaded)
        );

        this.isLoaded.subscribe(data => {
          if(data) {


            return data;
                                 
          }
        });


  }

  busquedaPokemones(termino) {
    this.cargandoTipos = true;
    this.desabilitar = true;

    if(termino === '') {
      this._snackBar.open('Ingresa el término de búsqueda', 'Error', {
        duration: 2000,
      });
      this.getPokemones();
      this.store.dispatch(new desdeStore.CargarPokemones(this.hasta)); 

      this.desabilitar = false;
      return;
   

    }

      this._pokemonesService.obtenerPokemonPorNombreOID(termino)
        .subscribe( resp => {

          this.cargandoTipos = false;


          this.pokemon = {
            name: resp['name'],
            id: resp['id'],
            detalles: resp
          }

          this.pokemones = [];
          this.pokemones.push(this.pokemon);

                  

        }, (error) => {

          if(error.error === 'Not Found') {
            this._snackBar.open('No hay resultados :(', 'Error', {
              duration: 4000,
            });
            this.getPokemones();
            this.store.dispatch(new desdeStore.CargarPokemones(this.hasta)); 
            this.desabilitar = false;
          }
          
        });
        
    
    
  }

  getPokemones() {    
    this.store.select(desdeStore.getPokemones)
    .subscribe(res => {
      
      this.pokemones = res;   
            
      
      this.pokemones.forEach(pokemonBD => {   
        
        // dividir el url por cada /
        // la longitud del arreglo es 6 (-2 ya que la posición 6 corresponde al id del pokemon)
        // Number, para convertir el resultado a número
        pokemonBD.id = Number(pokemonBD.url.split('/')[pokemonBD.url.split('/').length - 2]);

        // Inicializar en vacio propiedad para evitar el 'cannot read property of undefined'
        pokemonBD.detalles = {};
        pokemonBD.detalles.sprites = {};
        this.getTipos(pokemonBD);
         
      });        
    
       
      }, (error) => {
        console.log(error);
        
      });
  }

  getTipos(pokemon: any) {

    this.cargandoTipos = true;

    return this._pokemonesService.obtenerDetallePokemon(pokemon).subscribe(resp =>{
    
      this.pokemones.filter(filtro => {
        if(filtro.id === pokemon.id) {
          filtro.detalles = resp;
        }
      });

      this.cargandoTipos = false;
      

      
    }, (error) => {
      console.log(error);
      
    });
  }

  
  cargar(valor: number) {    

    this.hasta += valor;
    if(this.hasta < 0) {
      this.hasta = 0;
    }  

    if (this.hasta >= this.totalRegistros) {
      this.hasta = this.totalRegistros - 18;
    }    

        this.store.dispatch(new desdeStore.CargarPokemones(this.hasta));    

    
  }




}
