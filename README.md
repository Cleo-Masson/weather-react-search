# SheCodes React Weather App

A weather app built with React and Vite, using the SheCodes Weather API.
Coded by Cleo Masson.

## API key

The SheCodes Weather API key is not stored in the code. Add it as an environment variable called `VITE_SHECODES_API_KEY`:

- On your computer: create a file called `.env.local` in the project folder containing `VITE_SHECODES_API_KEY=your-key`
- On Netlify: Site configuration > Environment variables > Add a variable, then redeploy

You can find your key on the SheCodes Weather API page.

## Run it on your computer

```
npm install
npm run dev
```

Then open the link it shows (usually http://localhost:5173).

## Forecast switch

In `src/Weather.jsx`:

- `const showForecast = false;` for the Week 5 homework (no forecast)
- `const showForecast = true;` for the final project (5-day forecast)

## Components

- `App.jsx` - page layout and footer with GitHub and Netlify links
- `Weather.jsx` - search form, API call, stores the weather in state
- `WeatherInfo.jsx` - city, date, description, humidity, wind, icon
- `FormattedDate.jsx` - turns the API time into "Sunday 20:45"
- `WeatherTemperature.jsx` - temperature with a °C / °F toggle
- `WeatherForecast.jsx` - calls the forecast API and shows 5 days
- `WeatherForecastDay.jsx` - one day of the forecast
