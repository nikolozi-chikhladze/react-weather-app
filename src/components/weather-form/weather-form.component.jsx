import React, { useCallback, useMemo, useState } from "react";
import weatherService from "../../api/weatherService";
import {
  WeatherFormContainer,
  WeatherFormInput,
  WeatherFormSubmit,
  WeatherForm,
} from "./weather-form.styles";

function WeatherFormComponent({ handleSubmit }) {
  const [searchField, setSearchField] = useState("");
  const handleInputChange = useCallback(
    (e) => setSearchField(e.target.value.trim().toLowerCase()),
    [setSearchField]
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      weatherService
        .fetchWeatherBySearchField(searchField)
        .then((result) => handleSubmit(result));
    },
    [searchField, handleSubmit]
  );

  return (
    <WeatherFormContainer>
      <WeatherForm onSubmit={onSubmit}>
        <WeatherFormInput
          placeholder="Enter city title"
          onChange={handleInputChange}
        />
        <WeatherFormSubmit type="submit">Search Weather</WeatherFormSubmit>
      </WeatherForm>
    </WeatherFormContainer>
  );
}

export default WeatherFormComponent;
