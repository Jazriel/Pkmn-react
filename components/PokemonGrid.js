import React from 'react';

import usePokemons from '../interfaces/usePokemons';
import PokemonCard from './PokemonCard';


export default () => {
  const pokemons = usePokemons();
  
  return (
    <div className='PokemonsContainer'>
      {pokemons.map(pokemon => (<PokemonCard key={pokemon.id} pokemon={pokemon}/>))}
    </div>
  );
}
