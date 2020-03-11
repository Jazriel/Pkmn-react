import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { pokeAPI } from '../axios';


export default (id) => {
  const [species, setSpecies] = useState({color: {}});

  useEffect(() => {
    const source = axios.CancelToken.source();
    pokeAPI.get(`/pokemon-species/${id}`, {cancelToken: source.token})
      .then(({data}) => {
        setSpecies(data);
      });
    return () => {
      return source.cancel();
    };
  }, [id]);

  return species;
};