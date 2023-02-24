import React from "react";
import { useContext, useState, useEffect } from "react";
import { CityContext } from "../context/CityContext";
import DataToIcon from "./DataToIcon";
import moment from "moment";
import ForecastCard from "./ForecastCard";
function Forecast() {
  const { info, list, setList, setGrades } = useContext(CityContext);

  useEffect(() => {}, [list]);

  console.log(list);
  return (
    <>
      <section className="hero__forecast">
      {list.map((element) => {
        return (
          <div className="forecast__card" key={element.dt}>
            <DataToIcon main={element.weather[0].main} />
            <h2>{element.main.temp}</h2>
            <p>{element.weather[0].description}</p>
            <span>{moment(element.dt_txt).format('dddd')}</span>
            <span>{moment(element.dt_txt).format('HH:mm')}</span>

          </div>
        );
      })}
      </section>
    </>
  );
}

export default Forecast;
