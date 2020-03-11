import React from 'react';

import '../types.css';


export default ({type}) => {
  return (<div className={`${type} Type capitalize`}>{type}</div>);
};