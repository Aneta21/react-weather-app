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

  return (
    <div className="ForecastDay">
      <div className="ForecastDay">{props.dt}</div>
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
