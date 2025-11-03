const API_KEY = "68d92b10cd544b6caa0174642252210";

const BASE_URL = "https://api.weatherapi.com/v1";
const CURRENT_URL = BASE_URL + "/current.json"
const FUTURE_URL = BASE_URL + "/future.json";

export async function getWeatherByLocation(location) {
  try {
    const response = await fetch(
      `${CURRENT_URL}?key=${API_KEY}&q=${location}&aqi=no`
    );
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during weather fetching.", error);
  }
}

export async function getForecastByLocationAndDate(location, date) {
  try {
    const response = await fetch(
      `${FUTURE_URL}?key=${API_KEY}&q=${location}&dt=${date}`
    );
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during weather forecast fetching. Date should be between 14 and 300 days from current.", error);
  }
}
