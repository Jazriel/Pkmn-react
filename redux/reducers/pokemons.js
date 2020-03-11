import { SET_POKEMONS } from '../actionTypes';


const initialState = {
  pokemons: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: [...action.payload],
      };
    default:
      return state;  
  } 
};
