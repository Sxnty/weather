import React from "react";
import { WiCloudy, WiDaySunny, WiDayHaze, WiShowers } from "react-icons/wi";
    const DataToIcon = ({main}) => {
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

export default DataToIcon