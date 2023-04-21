import { HttpClient } from "./httpClient";


export class CitiesServices {
    apiKey = process.env.REACT_APP_CITIES_API_KEY;
    apiUrl = process.env.REACT_APP_CITIES_API_URL;
    httpClient = new HttpClient();
  
    fetchCities = async () => {
      try {
        const baseUrl = `${this.apiUrl}?&_fields=name,city_code,lat,lng&api_key=${this.apiKey}`;
        const response = await this.httpClient.get(baseUrl);
        return response;
      } catch (error) {
        throw new Error(`Unable to fetch user data error msg: ${error}`);
      }
    };
  }
  