import React from "react";
import { useEffect, useState } from "react";
import { CityContext } from "../context/CityContext";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
function Data() {
  const [list, setList] = useState([
    {
      dt: "Loading...",
      main: { temp: "loading",},
      weather: [{description:'loading', main:'loading'}]
    },
  ]);

  const [temp, setTemp] = useState("");
  const [main, setMain] = useState("");
  const [description, setDescription] = useState("");
  const [cityName, setCityName] = useState("Atlantida");
  const [newCity, setNewCity] = useState();
  const [grades, setGrades] = useState("metric");
  const [humidity, setHumidty] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");

  const fetchFore = async (city, grades) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5eba1bf17fdacafceb70f666362eb871&units=${grades}&cnt=10`
    );
    const data = await res.json();
    setList(data.list);
  };

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
    return;
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

  useEffect(
    (city) => {
      fetchData(info.cityName, grades);
      fetchFore(info.cityName, grades);
    },
    [info.cityName, info.grades]
  );
  return (
    <>
      <CityContext.Provider
        value={{
          newCity,
          setNewCity,
          setCityName,
          setGrades,
          info,
          list,
          setList,
        }}
      >
        <main className="hero">
          <WeatherInfo />
          <Forecast />
        </main>
      </CityContext.Provider>
    </>
  );
}

export default Data;
