import React from "react";
import { WiCloudy, WiDaySunny, WiDayHaze, WiShowers } from "react-icons/wi";
const DataToIcon = ({ main }) => {
  switch (main) {
    case "Clear":
      return <WiDaySunny />;
      break;
    case "Clouds":
      return <WiCloudy />;
      break;
    case "Haze":
      return <WiDayHaze />;
      break;
    case "Rain":
      return <WiShowers />;
      break;
  }
};

export default DataToIcon;
