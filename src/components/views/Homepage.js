import React from 'react';
import { config } from '../../config/cities';
import Pogodynka from '../features/Pogodynka';

export const Homepage = () => {

  const nums = new Set();
  while(nums.size !== 3) {
    nums.add(Math.floor(Math.random() * config.length));
  }
  const n = [...nums];

  // setInterval(function() {
  //   window.location.reload();
  //   console.log('refresh')
  // }, 60000); 

  return (
    <div>
      {n.map(i => (
        <Pogodynka key={i} local={config[i]} />
      ))}
    </div>
  );
};

export default Homepage;
