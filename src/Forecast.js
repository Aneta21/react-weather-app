import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    setLoaded(false);
    const { lat, lon } = props.coordinates;
    const apiKey = "9d01a180c47ff057558ff63995f97849";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Forecast">
        <div>
          <h2>Forecast</h2>
          <div className="row ForecastItem">
            {forecast.map(function (dailyForecast, index) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <ForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {

    return null;
  }
}
