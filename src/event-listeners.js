import {
  getWeatherByLocation,
  getForecastByLocationAndDate,
} from "./api-client.js";
import {
  extractWeatherForecastInfo,
  extractWeatherInfo,
  getForecastDate,
  showExtractedWeatherForecastInfo,
  showExtractedWeatherInfo,
} from "./response-parser.js";

export function attachEventListenerToInput() {
  const locationInputForm = document.querySelector("#search-form");
  locationInputForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const locationInput = document.querySelector("#search-input");
    const location = locationInput.value;

    if (location) {
      const data = await getWeatherByLocation(location);
      const formattedData = extractWeatherInfo(data);
      showExtractedWeatherInfo(formattedData);

      let startOffset = 14;

      for (let index = 1; index <= 5; index++) {
        const date = new Date();
        date.setDate(date.getDate() + startOffset++);

        const formattedDate =
          date.getFullYear() +
          "-" +
          String(date.getMonth() + 1).padStart(2, "0") +
          "-" +
          String(date.getDate()).padStart(2, "0");

        const forecastData = await getForecastByLocationAndDate(
          location,
          formattedDate
        );

        const formattedForecastData = extractWeatherForecastInfo(forecastData);
        showExtractedWeatherForecastInfo(formattedForecastData, index);
      }

      locationInput.value = "";
    }
  });
}
