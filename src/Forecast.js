import React from "react";
import Icon from "./Icon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div>
        <h2>Forecast</h2>
        <div className="row ForecastItem">
          <div className="col-2">
            <div className="ForecastDay">Day</div>
            <div className="ForecastIcon">
              <Icon code="02d" size={50} />
            </div>
            <span className="ForecastTemp">
              <span className="ForecastMax">20</span> |{" "}
              <span className="ForecastMin"> 19</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
