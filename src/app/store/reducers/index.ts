import * as pokemonesReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    pokemones: pokemonesReducer.PokemonState;
}

export const reducers = {
    pokemones: pokemonesReducer.reducer,
};

export const getState = (state) => state;

// POKEMONES

export const getStatePokemonState = createFeatureSelector<pokemonesReducer.PokemonState>('pokemones');
export const getPokemones = createSelector(getStatePokemonState, pokemonesReducer.getPokemones);

export const estanCargados = createSelector(
    getStatePokemonState,
    pokemonesReducer.getPokemonesCargados
    );

export const isLoading = createSelector(
        getStatePokemonState,
        pokemonesReducer.getPokemonesCargando
      );

export const getPokemonById = (id: number) => createSelector(getPokemones, (pokemones) => {
    if (pokemones) {        
        const pokemonBD = pokemones.find(pokemon => pokemon.id === id);
        return pokemonBD || {};
    } else {
        return {};
    }
});
// export const getPokemonByNombre = (name) => createSelector(getPokemonesNombre, (pokemones) => {
//     if (pokemones) {        
//         const pokemonBD = pokemones.find(pokemon => pokemon.name === name);
//         return pokemonBD || {};
//     } else {
//         return {};
//     }
// });
