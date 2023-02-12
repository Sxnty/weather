import React from "react";
import { useContext, useState } from "react";
import { CityContext } from "../context/CityContext";
function Forecast() {
  const { info } = useContext(CityContext);

  return (
    <>
  <div>
  <h1>{info.cityName}</h1>
  </div>
    </>
  );
}

export default Forecast;
