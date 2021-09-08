import axios from "axios";

const apiKey = "2e056e0ce73717d2f1c75b58a99d50fa";

const weatherService = {
  fetchWeatherBySearchField: (searchField) =>
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=${apiKey}`
      )
      .then((result) => result.data),
};

export default weatherService;
