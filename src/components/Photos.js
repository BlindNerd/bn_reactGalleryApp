import React from 'react';

let Pics = props => (

  <li>
    <img title={props.title} src={props.url}  key={props.id} alt="Flicker Photos"  />
  </li>

);


export default Pics;
