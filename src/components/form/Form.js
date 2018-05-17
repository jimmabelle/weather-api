import React from "react"

const Form = props => (
  <div>
    <form className="weatherForm" onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <button>Get Weather</button>
    </form>
  </div>
)

export default Form
