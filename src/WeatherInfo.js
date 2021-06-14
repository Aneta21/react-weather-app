import React from "react";
import TimeDate from "./TimeDate";
import "./WeatherInfo.css";
import Icon from "./Icon";
import Units from "./WeatherUnits";

export default function WeatherInfo(props) {
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
          <span>
            <Icon code={props.data.icon} />
            <Units celsius={props.data.temperature} />
          </span>
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
