import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current">
        <div>
          <h1>{props.data.city}</h1>
          <p className="details">
            <FormattedDate date={props.data.date} />,{" "}
            <span className="description">{props.data.description}</span>
            <br />
            Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
            <strong>{Math.round(props.data.wind * 3.6)} km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <img src={props.data.iconUrl} alt={props.data.description} className="icon" />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
