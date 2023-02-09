import React, { useEffect } from "react";
import { useState } from "react";
import { WiCloudy, WiDaySunny, WiDayHaze, WiShowers } from "react-icons/wi";
import { MdSearch } from "react-icons/md";
function WeatherInfo() {
  const [temp, setTemp] = useState("");
  const [main, setMain] = useState("");
  const [description, setDescription] = useState("");
  const [cityName, setCityName] = useState("Atlantida");
  const [newCity, setNewCity] = useState();
  const [grades, setGrades] = useState("metric");
  const [humidity, setHumidty] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");

  const fetchData = async (city, grades) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${grades}&appid=5eba1bf17fdacafceb70f666362eb871`;
    const response = await fetch(url);
    const data = await response.json();
    setTemp(data.main.temp);
    setMain(data.weather[0].main);
    setDescription(data.weather[0].description);
    setCityName(`${data.name}, ${data.sys.country}`);
    setHumidty(data.main.humidity);
    setMaxTemp(data.main.temp_max);
    setMinTemp(data.main.temp_min);

    console.log(data);
  };
  const info = {
    temp: temp,
    main: main,
    description: description,
    cityName: cityName,
    grades: grades,
    humidity: humidity,
    max: maxTemp,
    min: minTemp,
  };

  const dataToIcon = () => {
    switch (main) {
      case "Clear":
        return (
          <i>
            <WiDaySunny />
          </i>
        );
        break;
      case 'Clouds':
      return (
        <i>
        <WiCloudy />
      </i>
      )
      break;
      case 'Haze':
        return(
          <i>
          <WiDayHaze />
        </i>
        )
        break;
        case 'Rain':
          return(
            <i>
            <WiShowers />
          </i>
          )
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
    if (info.grades === "metric") {
      return "Change to Farenheit";
    } else {
      return "Change to Celsius";
    }
  };

  return (
    <main className="hero">
      <section className="hero__weather">
        <form
          className=""
          onSubmit={(e) => {
            setCityName(newCity);
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="search a city..."
            onChange={changeHandle}
          />
        </form>
        {dataToIcon()}
          <div className="weather__title">
          <h1>{info.cityName}</h1>
        <h2>{info.description}</h2>
          </div>
        <div className="weather__info">
          <div>
            <p>{info.temp}</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{info.humidity}%</p>
          </div>
          <div>
            <p>Min temp</p>
            <p>{minTemp}</p>
          </div>
          <div>
            <p>Max temp</p>
            <p>{maxTemp}</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (info.grades === "metric") {
              setGrades("imperial");
            } else {
              setGrades("metric");
            }
          }}
        >
          {gradesConverter()}
        </button>
      </section>
    </main>
  );
}

export default WeatherInfo;
