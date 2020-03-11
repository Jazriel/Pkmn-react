import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


export default () => {
  const [input, setInput] = useState('');
  const [redirect, setRedirect] = useState(null);

  const redirectById = () => {
    setRedirect(<Redirect to={`/id/${input}`} />);
  }

  const redirectToNameSearch = () => {
    setRedirect(<Redirect to={`/search/${input}`} />);
  }

  return (
    <div className='PokemonSearch'>
      <h1>Pokemon Search!</h1>
      <div>
        {redirect}
        <button onClick={redirectToNameSearch} className='breathe'>Search by name</button>
        <button onClick={redirectById} className='breathe'>Search by id</button>
        <input onBlur={(e) => setInput(e.target.value)} className='breathe' />
      </div>
    </div>
  );
};
