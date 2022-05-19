import React, { useEffect, useState } from 'react';
import getWindDirection from './Winddirection';
import fetchData from './FetchData';
import './Pogodynka.scss';
import getCloudType from './getCloudType';

const Pogodynka = ({local}) => {
  const [data, setData] = useState(null);
  const {lat, lon, name} = local;
  function getTempInCelcius(temp) {
    return `${Math.round(temp)}°C. `;
  }
  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }


  useEffect(() => {
    fetchData(lat, lon, setData);
    const interval = setInterval(() => {
      fetchData(lat, lon, setData);
    }, 600000);

    return () => clearInterval(interval);
  }, []);
  if (data === null) {
    return (
      <div>
        <h3>Waiting for DATA</h3>
      </div>
    );
  }
  return (
    <div className='main container'>
      <div className='col-12 row info'>
        <h3 className='col-12 temperature'>
          {getTempInCelcius(data.main.temp)}
          {name}, {data.sys.country}
        </h3>
      </div>
      <p className='weather__info col-12'>
        Feels like {getTempInCelcius(data.main.feels_like)}
        {getCloudType(data.clouds.all)}
        {capitalize(data.weather[0].description)}.
      </p>
      <div className='col-12 row'>
        <p className='col-6 right'>
          Wind {data.wind.speed}m/s {getWindDirection(360)}
        </p>
        <p className='col-6'>Visivility {(data.visibility / 1000).toFixed(1)} km</p>
      </div>
    </div>
  );
};

export default Pogodynka;
