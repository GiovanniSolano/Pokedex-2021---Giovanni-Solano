import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { delay, map } from 'rxjs/operators';
import { Detalle_Pokemon, Pokemon } from '../models/pokemon.model';

const URL_API_POKEMONES = environment.URL_API_POKEMONES;

interface totalRegistros {
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  constructor(private http: HttpClient) { }


  obtenerPokemones(hasta: number = 20) {    

    return this.http.get(`${URL_API_POKEMONES}/pokemon?offset=${hasta}&limit=20`)
      .pipe(map(results => results['results']));

  }

  obtenerDetallePokemon(pokemon: Pokemon) {
    
    return this.http.get<Detalle_Pokemon>(`${URL_API_POKEMONES}/pokemon/${pokemon.id}`);
  }

  obtenerPokemonPorNombreOID(termino) {
    
    return this.http.get(`${URL_API_POKEMONES}/pokemon/${termino}`);
  }


  getTotalRegistros() {
    return this.http.get<totalRegistros>(`${URL_API_POKEMONES}/pokemon`)
      .pipe(map(resp => resp.count));

  }





}

    
// return this.http
// .get(`${URL_API_POKEMONES}/pokemon`)
// .pipe(map(pokemons => {
//   let pokemonesTemp: Pokemon[] = [];
//   pokemonesTemp =  pokemons['results']; 
  
//   Object.values(pokemonesTemp).forEach(pokemon => {
//     this.pokemones.push({name: pokemon['name']})
//   });        
//   return pokemons['results'];

// })).pipe(map(resp => resp),
// mergeAll(),
// pluck('url'),
// ).pipe(mergeMap((resp: any) => {
//   return this.http.get(resp);
// }),
// pluck('name')
// ).pipe(map((tipos => {

// })));


// }));


// return this.http
// .get(`${URL_API_POKEMONES}/pokemon`)
// .pipe(map(pokemons => pokemons['results']),
// mergeAll(),
// pluck('url'),
// ).pipe(mergeMap((resp: any) => {
//   return this.http.get(resp);
// }),
// pluck('types')
// ).pipe(map((tipos:any) => {
//     return {tipos};
// }));


// return this.http
// .get(`${URL_API_POKEMONES}/pokemon`)
// .pipe(map(pokemons => pokemons['results']),
// mergeAll(),
// pluck('name')
// ).pipe(map((tipos:any) => {
//     return {tipos};
// }));


   // return this.http
    // .get(`${URL_API_POKEMONES}/pokemon`)
    // .pipe(map(pokemons => pokemons['results']),
    // mergeAll(),
    // pluck('url')
    // ).pipe(mergeMap((resp: any) => {
    //   return this.http.get(resp);
    // }),
    // pluck('types')
    // ).pipe(map((tipos:any) => {
    //     return {tipos};
    // }));


    // return this.http
    //   .get(`${URL_API_POKEMONES}/pokemon`)
    //   .pipe(map(pokemons => pokemons['results']))
    //   .pipe(map((resp) => {
    //     let pokemonesTemp: Pokemon[] = [];
    //     pokemonesTemp =  resp;
    //     Object.values(pokemonesTemp).forEach(pokemon => {
    //       this.pokemones.push({name: pokemon['name']})
    //     });
    //     }))
    //   ;