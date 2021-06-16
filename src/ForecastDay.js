import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function tempMin() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}`;
  }
  function tempMax() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}`;
  }
  function Day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="ForecastDay">{Day()}</div>
      <div className="ForecastIcon">
        <Icon code={props.data.weather[0].icon} size={50} />
      </div>
      <span className="ForecastTemp">
        <span className="ForecastMax">{tempMax()}</span> |{" "}
        <span className="ForecastMin"> {tempMin()}</span>
      </span>
    </div>
  );
}
