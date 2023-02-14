import React, { useEffect, useContext } from "react";
import DataToIcon from "./DataToIcon";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { CityContext } from "../context/CityContext";
function WeatherInfo() {
  const {newCity, setNewCity, setCityName, setGrades, info} = useContext(CityContext)

  
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
      <DataToIcon main={info.main} />
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
          <p>{info.min}</p>
        </div>
        <div>
          <p>Max temp</p>
          <p>{info.max}</p>
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
  );
}

export default WeatherInfo;
