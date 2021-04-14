import * as pokemonesActions from '../actions/pokemon.action';
import { Pokemon } from '../../models/pokemon.model';

export interface PokemonState {
    data: Pokemon[];
    loaded: boolean;
    loading: boolean;
    error: string;
}

export const initialState: PokemonState = {
    data: [],
    loaded: false,
    loading: false,
    error: ''
};



export function reducer(state = initialState, action: pokemonesActions.PokemonesActions) {
    switch (action.type) {
      case pokemonesActions.CARGAR_POKEMONES: {
        
          return {
              ...state,
              loading: true,
          };
      }

      case pokemonesActions.CARGAR_POKEMONES_EXITOSO: {
        const data = action.payLoad;
        
        
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        };
      }

      case pokemonesActions.CARGAR_POKEMONES_FALLIDO: {
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payLoad
        };
      }



      default: {
          return state;
      }
    }
}

export const getPokemones = (state: PokemonState) => state.data;
export const getPokemonesCargados = (state: PokemonState) => state.loaded;
export const getPokemonesCargando = (state: PokemonState) => state.loading;
export const getPokemonesError = (state: PokemonState) => state.error;