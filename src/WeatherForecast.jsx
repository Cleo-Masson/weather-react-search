import { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

// The API key lives in an environment variable (see README), not in the code.
const apiKey = import.meta.env.VITE_SHECODES_API_KEY;

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const { latitude, longitude } = props.coordinates;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => setForecast(response.data.daily));
  }, [props.coordinates]);

  if (!forecast) {
    return null;
  }

  return (
    <div className="WeatherForecast">
      {forecast.slice(1, 6).map((day) => (
        <WeatherForecastDay key={day.time} data={day} />
      ))}
    </div>
  );
}
