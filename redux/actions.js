import {SET_POKEMONS} from './actionTypes';


export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});
