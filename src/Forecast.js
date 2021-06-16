import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div>
          <h2>Forecast</h2>
          <div className="row ForecastItem">
            <div className="col-2">
              <ForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    const apiKey = "9d01a180c47ff057558ff63995f97849";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return null;
  }
}
