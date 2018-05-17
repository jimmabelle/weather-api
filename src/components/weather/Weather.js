import React from "react"

const Weather = props => (
  <div className="weatherInfo">
    {
      props.city && props.country &&
      <p className="weatherKey">Location:
        <span className="weatherValue"> {props.city}, {props.country}</span>
      </p>
    }
    {
      props.temperature &&
      <p className="weatherKey">Tempareture:
        <span className="weatherValue"> {props.temperature}</span>
      </p>}
    {
      props.humidity &&
      <p className="weatherKey">Humidity:
        <span className="weatherValue"> {props.humidity}</span>
      </p>
    }
    {
      props.description &&
      <p className="weatherKey">Condition:
        <span className="weatherValue"> {props.description}</span>
      </p>
    }
    {props.error && <p className="weatherError">{props.error}</p>}
  </div>
)

export default Weather
