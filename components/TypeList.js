import React from 'react';

import TypeTag from './TypeTag';
import '../types.css';


export default ({types}) => {
    return (<div className='TypeList'>   
    {types.map((typeModel, index) => (
        <TypeTag key={typeModel.type.name+index} type={typeModel.type.name} />))}
        </div>)
}
  