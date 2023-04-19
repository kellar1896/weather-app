import { City } from "../app/types";
import { HttpClient } from "./httpClient";

const apiKey = process.env.REACT_APP_CITIES_API_KEY

export class CitiesServices {
    httpClient = new HttpClient();
  
    fetchCities = async () => {
      try {
        const baseUrl = `https://airlabs.co/api/v9/cities?&_fields=name,city_code,lat,lng&api_key=${apiKey}`;
        const response = await this.httpClient.get(baseUrl);
        return response;
      } catch (error) {
        console.log(`Error ${error}`);
        throw new Error("Unable to fetch user data");
      }
    };
  }
  