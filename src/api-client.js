const BASE_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "68d92b10cd544b6caa0174642252210";

export async function getWeatherByLocation(location) {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${location}&aqi=no`
    );
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during weather fetching.", error);
  }
}
