import * as React from 'react'

const WeatherDetail = ({ temp, loc}) => {
  return (
    <div>
      <h1>{temp}°C</h1>
      <h2>
        {loc}
      </h2>
    </div>
  )
}

export default WeatherDetail
