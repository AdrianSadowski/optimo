async function fetchData(lat, lon, setData) {
  const fetchData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude=current&appid=40cec65f5ce3b579ad293b25a41ace08&units=metric&lang={pl}`
  await fetch(fetchData)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error('Error', error);
    });

}

export default fetchData;
