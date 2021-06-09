import React from "react";
import "./Weather.css";
import axios from "axios";
import Form from "./Form";

export default function Weather() {
  return (
    <div className="Weather">
      <Form />
      <h1>New York</h1>
      <div className="info">
        <ul>
          <li>Saturday 14:00</li>
          <li>Sunny</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="icon">
            <img
              src="https://cdn3.iconfinder.com/data/icons/summer-189/64/sun_bright_sunlight-512.png"
              alt="sunny"
            />
          </span>
          <span className="temperature">23</span>
          <span className="unit">°C | °F</span>
        </div>
        <div className="col-6 details">
          <ul>
            <li>Feels like: 23°C</li>
            <li>Humidity: 40%</li>
            <li>Pressure: 1019hPa</li>
            <li>Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
