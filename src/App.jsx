import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import WeatherInfo from './components/WeatherInfo'

function App() {


/* https://api.openweathermap.org/data/2.5/weather?q=atlantida&units=metric&appid=5eba1bf17fdacafceb70f666362eb871 */
/* https://api.openweathermap.org/data/2.5/forecast?q=atlantida&appid=5eba1bf17fdacafceb70f666362eb871 */


  return (
    <div className="App">
      <Navbar/>
      <WeatherInfo/>
    </div>
  )
}

export default App
