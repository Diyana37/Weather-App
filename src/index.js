import { getWeatherByLocation } from "./api-client.js";
import "./styles.css";
import { extractWeatherInfo } from "./response-parser.js";

const location = "Plovdiv";

async function init() {
    const data = await getWeatherByLocation(location);
    console.log("raw data", data);

    const formattedData = extractWeatherInfo(data);
    console.log("formatted data" ,formattedData);
}

init();