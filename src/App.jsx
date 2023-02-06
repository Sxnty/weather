import Navbar from "./components/Navbar";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  /* https://api.openweathermap.org/data/2.5/weather?q=atlantida&units=metric&appid=5eba1bf17fdacafceb70f666362eb871 */
  /* https://api.openweathermap.org/data/2.5/forecast?q=atlantida&appid=5eba1bf17fdacafceb70f666362eb871 */

  return (
    <>
      <Navbar />
      <WeatherInfo />
    </>
  );
}

export default App;
