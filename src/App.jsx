import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Port Louis" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Cleo-Masson" target="_blank" rel="noreferrer">
            Cleo Masson
          </a>
          , is{" "}
          <a
            href="https://github.com/Cleo-Masson/weather-react-search"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://cleo-weather-search.netlify.app" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
