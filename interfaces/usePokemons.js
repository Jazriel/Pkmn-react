import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { pokeAPI } from '../axios';
import { setPokemons } from '../redux/actions';
import { getPokemons } from '../redux/selectors';
import { range } from '../utils.js';


export default () => {
  const pokemonsState = useSelector(getPokemons);
  const dispatch = useDispatch();
  const pokemons = pokemonsState.pokemons;

  useEffect(() => { 
    const source = axios.CancelToken.source();
    const pokes = [];
    const getPoke = (i) => pokeAPI.get(`/pokemon/${i}`, {cancelToken: source.token});
    const requests = range(1,14)
      .map((index) => getPoke(index)
      .then((response) => {
      pokes.push(response.data);
    }));
    axios.all(requests).then(() => {
      dispatch(setPokemons(pokes.sort((poke1, poke2) => poke1.id > poke2.id)));
    });

    return () => {
      source.cancel();
    };
  }, []);

  return pokemons;
};