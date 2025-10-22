export function extractWeatherInfo(data) {
  if (data) {
    const tokens = data.location?.localtime?.split(" ");
    const localtime = tokens[1];

    const formattedData = {
      city: data.location?.name,
      country: data.location?.name,
      localtime,
      temp_c: data.current?.temp_c,
      temp_f: data.current?.temp_f,
      is_day: data.current?.is_day,
      wind_mph: data.current?.wind_mph,
      wind_kph: data.current?.wind_kph,
      humidity: data.current?.humidity,
      feelslike_c: data.current?.feelslike_c,
      feelslike_f: data.current?.feelslike_f,
    };

    return formattedData;
  }

  return null;
}
