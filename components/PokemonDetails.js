import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { pokeAPI } from '../axios';
import PokemonCard from './PokemonCard';
import TypeList from './TypeList';
import usePokemon from '../interfaces/usePokemon';
import usePokemonSpecies from '../interfaces/usePokemonSpecies';


export default () => {
  const {id} = useParams('id');

  const {name, abilities, forms, height, sprites, types, weight} = usePokemon(id);
  const {color} = usePokemonSpecies(id);

  const idForUser = '0'.repeat(3 - id.length) + id; 

  // const [evolutionChain, setEvolutionChain] = useState({});
  // const ecUrl = data.evolution_chain.url;
  // const ecEndpoint = ecUrl.slice(ecUrl.lastIndexOf('evolution-chain'));
  // pokeAPI.get(`${ecEndpoint}`, {cancelToken: source.token})
  //   .then(({data})=>{
  //     setEvolutionChain(data);
  //   });
  // <EvolutionChain />

  const style = {
    backgroundColor: color.name,
  };

  return (
    <div className='PokemonDetails row'>
      <div className='main-details column' style={style}>
        <div className='row space-evenly'>
          <h2 className='capitalize'>{name}</h2>
          <h2 >#{idForUser}</h2>
        </div>
        {sprites && sprites['front_female'] ? 
        <div className='subtitle row space-around'><h3>Male</h3></div> : null}
        {sprites ? 
        <div className='row space-around'>
          <img src={sprites['front_default']} />
          <img src={sprites['back_default']} />
          <img src={sprites['front_shiny']} />
          <img src={sprites['back_shiny']} />
        </div> : null}
        {sprites && sprites['front_female'] ? 
        <div className='subtitle row space-around'><h3>Female</h3></div> : null}
        {sprites && sprites['front_female'] ? 
        <div className='row space-around'>
          <img src={sprites['front_female']} />
          <img src={sprites['back_female']} />
          <img src={sprites['front_shiny_female']} />
          <img src={sprites['back_shiny_female']} />
        </div> : null}
        <div className='row'>
          <div style={{margin: '0 auto'}}>
            <TypeList  types={types}/>
          </div>
        </div>
        <div className='subtitle row space-around'><h3>Abilities</h3></div>
        <div className='row space-evenly abilities'>
          {abilities.map(({ability}) => {
            return (<p className='capitalize'>{ability.name}</p>);
          })}
        </div>
        <div className='row space-around'>
          <div className='column'>
              <h4 style={{borderRadius: '5px 5px 0 0'}}>Height</h4>
              <p style={{borderRadius: '0 0 5px 5px'}}>{(+height)/10 + ' m'}</p>
          </div>
          <div className='column'>
              <h4 style={{borderRadius: '5px 5px 0 0'}}>Weight</h4>
              <p style={{borderRadius: '0 0 5px 5px'}}>{(+weight)/10 + ' kg'}</p>
          </div>
        </div>
      </div>
      <div className='column'>
      </div>
    </div>
  );
};