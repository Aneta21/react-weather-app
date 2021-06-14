import React from "react";
import TimeDate from "./TimeDate";
import "./WeatherInfo.css";

export default function WeathrInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="info">
        <ul>
          <li>
            <TimeDate date={props.data.date} />
          </li>
          <li className="description">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="icon">
            <img src={props.data.iconUrl} alt="sunny" />
          </span>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C | °F</span>
        </div>
        <div className="col-6 details">
          <ul>
            <li>Feels like: {Math.round(props.data.feels)}°C</li>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Pressure: {props.data.pressure}hPa</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
