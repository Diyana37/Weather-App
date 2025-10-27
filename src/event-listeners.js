import { getWeatherByLocation } from "./api-client.js";
import { extractWeatherInfo } from "./response-parser.js";

export function attachEventListenerToInput() {
  const locationInputForm = document.querySelector("#search-form");
  locationInputForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const locationInput = document.querySelector("#search-input");
    const location = locationInput.value;

    if (location) {
      console.log(location);
      const data = await getWeatherByLocation(location);
      console.log("raw data", data);

      const formattedData = extractWeatherInfo(data);
      console.log("formatted data", formattedData);

      locationInput.value = "";
    }
  });
}
