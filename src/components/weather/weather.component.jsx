import React, { useState } from "react";
import { useCallback } from "react";
import WeatherCard from "../weather-card/weather-card.component";
import WeatherFormComponent from "../weather-form/weather-form.component";
import { WeatherContainer } from "./weather.styles";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const handleSubmit = useCallback(
    (weather) => setCurrentWeather(weather),
    [setCurrentWeather]
  );
  return (
    <WeatherContainer>
      <WeatherFormComponent handleSubmit={handleSubmit} />
      {currentWeather && (
        <WeatherCard
          name={currentWeather.name}
          main={currentWeather.weather[0].main}
          description={currentWeather.weather[0].description}
        />
      )}
    </WeatherContainer>
  );
};

export default Weather;
