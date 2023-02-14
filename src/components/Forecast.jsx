import React from "react";
import { useContext, useState, useEffect } from "react";
import { CityContext } from "../context/CityContext";
import DataToIcon from "./DataToIcon";
import ForecastCard from "./ForecastCard";
function Forecast() {
  const { info, list, setList } = useContext(CityContext);

  useEffect(() => {}, [list]);

  console.log(list);
  return (
    <>
      {list.map((element) => {
        return (
          <div className="forecast__card" key={element.dt}>
            <DataToIcon main={element.weather[0].main} />
            <h2>{element.main.temp}</h2>
            <p>{element.weather[0].description}</p>
            <p>{element.dt_txt}</p>
          </div>
        );
      })}
    </>
  );
}

export default Forecast;
