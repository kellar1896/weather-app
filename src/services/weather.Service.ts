import { City } from "../app/types/cities";
import { HttpClient } from "./httpClient";

export class WeatherService {
  apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  apiUrl = process.env.REACT_APP_OPEN_WEATHER_API_URL;
  httpClient = new HttpClient();

  fetchWeather = async (city: City) => {
    try {
      const baseUrl = `${this.apiUrl}?lat=${city.lat}2&lon=${city.lng}&exclude=hourly,minutely&units=metric&appid=${this.apiKey}`;
      const response = await this.httpClient.get(baseUrl);
      return response;
    } catch (error) {
      throw new Error(`Unable to fetch user data error msg: ${error}`);
    }
  };
}
