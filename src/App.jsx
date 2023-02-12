import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
import Data from "./components/Data";
import { CityContext } from "./context/CityContext";
import { useState } from "react";
function App() {
  /* https://api.openweathermap.org/data/2.5/weather?q=atlantida&units=metric&appid=5eba1bf17fdacafceb70f666362eb871 */
  /* https://api.openweathermap.org/data/2.5/forecast?q=atlantida&appid=5eba1bf17fdacafceb70f666362eb871 */
  const [test, setTest] = useState("a");
  return (
    <>
        <Navbar />
          <Data/>
    </>
  );
}

export default App;
