import React, { useEffect } from "react";
import { useState } from "react";
import { WiCloudy } from "react-icons/wi";
function WeatherInfo() {
  const [temp, setTemp] = useState("");
  const [main, setMain] = useState("");
  const [description, setDescription] = useState("");
  const [cityName, setCityName] = useState("Atlantida");
  const [newCity, setNewCity] = useState();
  const [grades, setGrades] = useState('metric');
  const fetchData = async (city, grades) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${grades}&appid=5eba1bf17fdacafceb70f666362eb871`;
    const response = await fetch(url);
    const data = await response.json();
    setTemp(data.main.temp);
    setMain(data.weather[0].main);
    setDescription(data.weather[0].description);
    setCityName(`${data.name}, ${data.sys.country}`);
    console.log(data);
    
  };
  const info = {
    temp: temp,
    main: main,
    description: description,
    cityName: cityName,
    grades: grades
  }

  const dataToIcon = () => {
    switch (main) {
      case "Clouds":
        return <WiCloudy />;
        break;
    }
  };
  useEffect(
    (city) => {
      fetchData(info.cityName, grades);
    },
    [info.cityName, info.grades]
  );

  const changeHandle = (e) => {
    setNewCity(e.target.value);
  };
const gradesConverter = () => {
    if(info.grades === 'metric') {
        return 'Celcius'
      } else {
        return 'Farenheit'
      }
}

  return (
    <main className="hero__weather">
      <h1>{info.cityName}</h1>
      {dataToIcon()}
      <div className="weather__info">
        <h3>{info.temp}</h3>
        <p>{info.description}</p>
      </div>
      <form
        onSubmit={(e) => {
          setCityName(newCity);
          e.preventDefault();
        }}
      >
        <input type="text" placeholder="City name..." onChange={changeHandle} />
      </form>
      
      <button onClick={(e) => {
        e.preventDefault()
        if(info.grades === 'metric') {
            setGrades('imperial')
        } else {
            setGrades('metric')
        }

      }}>{gradesConverter()}</button>
    </main>
  );
}

export default WeatherInfo;
