export default function WeatherForecastDay(props) {
  function day() {
    const date = new Date(props.data.time * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url.replace("http://", "https://")}
        alt={props.data.condition.description}
        className="forecast-icon"
      />
      <div className="forecast-temperatures">
        <span className="max">{Math.round(props.data.temperature.maximum)}°</span>
        <span className="min">{Math.round(props.data.temperature.minimum)}°</span>
      </div>
    </div>
  );
}
