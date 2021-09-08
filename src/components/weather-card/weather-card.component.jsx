import React from "react";
import {
  WeatherCardContainer,
  WeatherCardDescription,
  WeatherCardTitle,
  WeatherCardType,
} from "./weather-card.styles";

const WeatherCard = ({ name, main, description }) => {
  return (
    <WeatherCardContainer>
      <WeatherCardTitle>{name}</WeatherCardTitle>
      <WeatherCardType>Type: {main.toLowerCase()}</WeatherCardType>
      <WeatherCardDescription>
        Desc: {description.toLowerCase()}
      </WeatherCardDescription>
    </WeatherCardContainer>
  );
};

export default WeatherCard;
