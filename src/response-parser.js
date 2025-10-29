export function extractWeatherInfo(data) {
  if (data) {
    const tokens = data.location?.localtime?.split(" ");
    const localtime = tokens[1];

    const formattedData = {
      city: data.location?.name,
      country: data.location?.country,
      localtime,
      temp_c: data.current?.temp_c,
      is_day: data.current?.is_day,
      wind_kph: data.current?.wind_kph,
      humidity: data.current?.humidity,
      feelslike_c: data.current?.feelslike_c,
      condition: data.current?.condition.text,
    };

    return formattedData;
  }

  return null;
}

export function showExtractedWeatherInfo(formattedData) {
  const temperature = document.querySelector(".temp-title");
  temperature.textContent = `${formattedData.temp_c}°C`;

  const city = document.querySelector(".city-title");
  city.textContent = formattedData.city;

  const country = document.querySelector(".country-title");
  country.textContent = formattedData.country;

  const condition = document.querySelector(".weather-condition");
  condition.textContent = formattedData.condition;

  const localtme = document.querySelector(".localtime");
  localtme.textContent = formattedData.localtime;

  const humidity = document.querySelector(".humidity-title");
  humidity.textContent = `${formattedData.humidity}%`;

  const wind = document.querySelector(".wind-title");
  wind.textContent = `${formattedData.wind}km/h`;

  const feelsLike = document.querySelector(".feels-like-title");
  feelsLike.textContent = `${formattedData.feelslike_c}°C`;

  const currentWeatherDiv = document.querySelector(".current-weather");

  if (formattedData.is_day) {
    currentWeatherDiv.classList.remove("night-background");
    currentWeatherDiv.classList.add(".day-background");
  } else {
    currentWeatherDiv.classList.remove(".day-background");
    currentWeatherDiv.classList.add("night-background");
  }
}
