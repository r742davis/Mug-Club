import React from 'react';
import beerTypes from './BeerTypes';
const uniqid = require('uniqid');

const typeMap = () => {
  Object.entries(beerTypes)
    .map(([key, value]) => {
        return <optgroup key={uniqid()} label={key.split(/(?=[A-Z])/).join(" ")}>{
          value.map(type => <option key={uniqid()} value={type}>{type}</option>)
        }</optgroup>
      }
    );
}

export default typeMap

//Iterate over object, return the optgroup with the key name, then map each key's array to display the options within that optgroup
