import React from "react";
import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
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
  function search() {
    const apiKey = "065d55f0dc357d457b78c1ad371a7843";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <div className="input-group mb-3 mt-2">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on"
                    onChange={handleChange}
                  />

                  <div className="col-3">
                    <button
                      type="submit"
                      value="Search"
                      className="btn btn-outline-secondary"
                    >
                      Search
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
