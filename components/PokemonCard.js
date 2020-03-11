import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

import TypeList from './TypeList';


const useStyles = createUseStyles({
  PokemonCard: {
    'box-sizing': 'border-box',
    padding: '1em',
    margin: '0.2em',
    border: '1px #ccc solid',
    'border-radius': '5px',
  }
});

export default ({pokemon}) => {
  const [shiny, setShiny] = useState(false);
  const [front, setFront] = useState(true);
  const sprite = (front ? 'front': 'back') + '_' + (shiny ? 'shiny': 'default');

  const styles = useStyles();

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
