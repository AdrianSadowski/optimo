import React, { useEffect, useState } from 'react';
import getWindDirection from './Winddirection';
import fetchData from './FetchData';
import './Pogodynka.scss';
import getCloudType from './getCloudType';

const Pogodynka = ({ local }) => {
  const [data, setData] = useState(null);
  const { lat, lon, name, url } = local;
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  if (data === null) {
    return (
      <div>
        <h3>Waiting for DATA</h3>
      </div>
    );
  }
  console.log(data);
  return (
    <div className='main'>
      <a style={{ display: 'table-cell' }} href={url} target='_blank'>
        <div className='info'>
          <h3 className='temperature'>{getTempInCelcius(data.main.temp)}</h3>
          <h3 className='name'>
            {name}, {data.sys.country}
          </h3>
        </div>
        <p className='weather__info'>
          <p>Feels like {getTempInCelcius(data.main.feels_like)}</p>
          <p>{getCloudType(data.clouds.all)}</p>
          <p>{capitalize(data.weather[0].description)}.</p>
        </p>
        <div className='weather__info__details'>
          <p>
            <span>Wind:</span>
            {data.wind.speed} m/s {getWindDirection(data.wind.deg)}
          </p>
          <p>
            <span>Visibility:</span>
            {(data.visibility / 1000).toFixed(1)} km
          </p>
        </div>
      </a>
    </div>
  );
};

export default Pogodynka;
