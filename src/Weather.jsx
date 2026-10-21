import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

// The API key lives in an environment variable (see README), not in the code.
const apiKey = import.meta.env.VITE_SHECODES_API_KEY;

// Week 5 homework: set this to false (no forecast).
// Final project: set this to true (shows the 5-day forecast).
const showForecast = false;

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [error, setError] = useState(null);

  function handleResponse(response) {
    if (response.data.status === "not_found" || !response.data.city) {
      setError("City not found. Please check the spelling and try again.");
      return;
    }
    setError(null);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url.replace("http://", "https://"),
      date: new Date(response.data.time * 1000),
    });
  }

  function search(cityName) {
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => setError("Something went wrong. Please try again."));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") return;
    search(city.trim());
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (!weatherData.ready) {
    if (!error) search(props.defaultCity);
    return <div className="Weather loading">Loading weather...</div>;
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-input"
          autoFocus="on"
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      {error && <p className="error">{error}</p>}
      <WeatherInfo data={weatherData} />
      {showForecast && <WeatherForecast coordinates={weatherData.coordinates} />}
    </div>
  );
}
