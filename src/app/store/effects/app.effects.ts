import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as PokemonesActions from '../actions/pokemon.action';


import { of } from 'rxjs';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { PokemonesService } from '../../services/pokemones.service';

@Injectable()
export class PokemonesEffects {

  constructor(
    private action$: Actions,
    private pokemonesService: PokemonesService
  ) {

  }

  cargarPokemones$ = createEffect(() =>  this.action$.pipe(
    ofType(PokemonesActions.CARGAR_POKEMONES),
    map((action: PokemonesActions.CargarPokemones) => action.payLoad),
    switchMap((payload: any) => this.pokemonesService.obtenerPokemones(payload)
    .pipe(
      map(response => new PokemonesActions.CargarPokemonesExitoso(response)),
      catchError(error => of(new PokemonesActions.CargarPokemonesFallido(error)))
      ))
    )
  );
  
  // cargarPokemonesPorNombre$ = createEffect(() =>  this.action$.pipe(
  //   ofType(PokemonesActions.CARGAR_POKEMONES),
  //   map((action: PokemonesActions.CargarPokemones) => action.payLoad),
  //   switchMap((payload: any) => this.pokemonesService.obtenerPokemonPorNombre(payload)
  //   .pipe(
  //     map(response => new PokemonesActions.CargarPokemonesPorNombreExitoso(response)),
  //     catchError(error => of(new PokemonesActions.CargarPokemonesFallido(error)))
  //     ))
  //   )
  // );


  // cargarDetallesPokemones$ = createEffect(() =>  this.action$.pipe(
  //   ofType(PokemonesActions.CARGAR_DETALES_POKEMONES),
  //   map((action: PokemonesActions.CargarDetallesPokemones) => action.payLoad),
  //   switchMap((payload: any) => this.pokemonesService.obtenerDetallePokemon(payload)
  //   .pipe(
  //     map(response => {                
  //       return new PokemonesActions.CargarDetallesPokemonesExitoso(response);
  //     },
  //     catchError(error => of(new PokemonesActions.CargarPokemonesFallido(error)))
  //     ))
  //   ))
  // );




}