import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import PokemonDetails from './components/PokemonDetails';
import PokemonGrid from './components/PokemonGrid';
import PokemonSearch from './components/PokemonSearch';
import store from './redux/store';
import './style.css';

// react hooks
// useReducer
// useContext
        // <PokemonSearchResults/>

const App = () => {
  return (
    <Router>
      <PokemonSearch/>
      <Switch>
        <Route exact path='/id'><Redirect to='/'/></Route>
        <Route path='/id/:id'>
          <PokemonDetails/>
        </Route>
        <Route path='/search/:name'>
        </Route>
        <Route exact path='/'><PokemonGrid/></Route>
      </Switch>
    </Router>
  );
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
