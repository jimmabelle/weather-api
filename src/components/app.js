import React from "react"

import Titles from "./titles/Titles"
import Form from "./form/Form"
import Weather from "./weather/Weather"

import "./app.css"

const API_KEY = "ada31c4dd9505b9deb20760e90c6552a"

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`)
    const data = await apiCall.json()
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a value!"
      })
    }
  }

  render() {
    return (
      <div
        className="wrapper">
        <div className="main">
          <div className="left">
            <Titles />
          </div>
          <div className="right">
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error} />
          </div>
        </div>
      </div>
    )
  }

}

export default App
