import * as React from 'react'

import WeatherDetail from './WeatherDetail'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const Weather = () => {
  const [city, setCity] = React.useState('Addis Ababa')
  const [country, setCountry] = React.useState('Ethiopia')
  const [weather, setWeather] = React.useState()
  const [loc, setLoc] = React.useState()
  const [temp, setTemp] = React.useState()

  React.useEffect(() => {
    requestWeather()
  }, [])

  async function requestWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${API_KEY}`
    )
    const response = await res.json()

    setWeather(response)
    setTemp(response.list[0].main.temp)
    setLoc(response.city.name + ', ' + response.city.country)
  }
  return (
    <div className='form-container'>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault()
          requestWeather()
        }}
      >
        <div className='form-row'>
          <label htmlFor='city'>
            <span className='required-style'>* </span>
            <input
              required
              id='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type='text'
              placeholder='city'
              className='form-text'
            />
          </label>
        </div>
        <div className='form-row'>
          <label htmlFor='country'>
            <span className='required-style'>* </span>
            <select
              id='country'
              className='form-text'
              value={country}
              onChange={(e) => {
                setCountry(e.target.value)
              }}
            >
              <option>Ethiopia</option>
              <option>Kenya</option>
              <option>Ukraine</option>
            </select>
          </label>
        </div>
        <button className='sub-btn'>Get Weather</button>
      </form>
      {weather ? <WeatherDetail temp={temp} loc={loc} /> : null}
    </div>
  )
}

export default Weather
