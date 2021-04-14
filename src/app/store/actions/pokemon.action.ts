
import { Action } from '@ngrx/store';
import { Pokemon } from '../../models/pokemon.model';




export const CARGAR_POKEMONES = '[Pokemon] Cargar pokemones';
export const CARGAR_POKEMONES_EXITOSO = '[Pokemon] Carga de pokemones exitoso';
// export const CARGAR_POKEMONES_NOMBRE_EXITOSO = '[Pokemon] Carga de pokemones exitoso';
export const CARGAR_POKEMONES_FALLIDO = '[Pokemon] Carga de pokemones fallido';

// export const CARGAR_DETALES_POKEMONES = '[Detalle_Pokemon] Cargar detalles pokemones';
// export const CARGAR_DETALLES_POKEMONES_EXITOSO = '[Detalle_Pokemon] Carga detalles de pokemones exitoso';
// export const CARGAR_DETALLES_POKEMONES_FALLIDO = '[Detalle_Pokemon] Carga detalles de pokemones fallido';


export class CargarPokemones implements Action {
    readonly type = CARGAR_POKEMONES;
    constructor(public payLoad: any) {}
}

export class CargarPokemonesExitoso implements Action {
    readonly type = CARGAR_POKEMONES_EXITOSO;

    constructor(public payLoad: Pokemon[]) {
    }
}

export class CargarPokemonesFallido implements Action {
    readonly type = CARGAR_POKEMONES_FALLIDO;

    constructor(public payLoad: any) {
    }
}


export type PokemonesActions = CargarPokemones | CargarPokemonesExitoso | CargarPokemonesFallido ;