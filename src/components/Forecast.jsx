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
      <secition className="hero__forecast">
      {list.map((element) => {
        return (
          <div className="forecast__card" key={element.dt}>
            <DataToIcon main={element.weather[0].main} />
            <h2>{element.main.temp}</h2>
            <p>{element.weather[0].description}</p>
            <span>{element.dt_txt}</span>
          </div>
        );
      })}
      </secition>
    </>
  );
}

export default Forecast;
