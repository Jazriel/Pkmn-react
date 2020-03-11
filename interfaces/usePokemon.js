import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { pokeAPI } from '../axios';


export default (id) => {
  const [pokemon, setPokemon] = useState({sprites: [], types: [], abilities: []});

  useEffect(() => {
    const source = axios.CancelToken.source();
    pokeAPI.get(`/pokemon/${id}`, {cancelToken: source.token})
      .then(({data}) => {
        setPokemon(data);
      });
    return () => {
      return source.cancel();
    };
  }, [id]);

  return pokemon;
};