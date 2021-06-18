import React from "react";
import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

const apiKey = "9d01a180c47ff057558ff63995f97849";
const weatherEndpointCommon = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      city: response.data.name,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiUrl = `${weatherEndpointCommon}&q=${city}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCoordinates);
  }
  function getCoordinates(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiUrl = `${weatherEndpointCommon}&lat=${lat}&lon=${lon}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="input-group mb-3 mt-2">
                  <input
                    type="search"
                    placeholder="Enter a city 🌍"
                    className="form-control"
                    autoFocus="on"
                    onChange={handleChange}
                  />
                  <span className="buttons"></span>
                  <div className="col-2">
                    <button
                      type="submit"
                      value="Search"
                      className="btn btn-outline-secondary"
                    >
                      Search
                    </button>
                  </div>
                  <div className="col-3 location">
                    <input
                      type="submit"
                      value="📍"
                      className="btn btn-outline-secondary"
                      onClick={getPosition}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>{" "}
        </div>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
