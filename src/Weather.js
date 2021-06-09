import React from "react";
import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Form from "./Form";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      city: response.data.name,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl:
        "https://cdn3.iconfinder.com/data/icons/summer-189/64/sun_bright_sunlight-512.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Form />
        <h1>{weatherData.city}</h1>
        <div className="info">
          <ul>
            <li>Saturday 14:00</li>
            <li className="description">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <span className="icon">
              <img src={weatherData.iconUrl} alt="sunny" />
            </span>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C | °F</span>
          </div>
          <div className="col-6 details">
            <ul>
              <li>Feels like: {Math.round(weatherData.feels)}°C</li>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Pressure: {weatherData.pressure}hPa</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "065d55f0dc357d457b78c1ad371a7843";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
