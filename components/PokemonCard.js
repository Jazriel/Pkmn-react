import React, { useState } from 'react';

import TypeList from './TypeList';


export default ({pokemon}) => {
  const [shiny, setShiny] = useState(false);
  const [front, setFront] = useState(true);
  const sprite = (front ? 'front': 'back') + '_' + (shiny ? 'shiny': 'default');

  return (
    <div className='PokemonCard center'>
      <p>Pokedex n: {pokemon.id}</p>
      <img className='clickable' src={pokemon.sprites[sprite]} onClick={() => setFront(!front)} />
      <p className='capitalize'>{pokemon.name}</p>
      <TypeList types={pokemon.types}/>
      <p className='clickable' onClick={() => setShiny(!shiny)}>{shiny ? '⭐' : '🌟' }</p>
    </div>
  );
};
