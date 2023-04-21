import { City } from "./cities"

export type WeatherDescription = {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export type CurrentWeather = {
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    humidity: number
    clouds: number
    wind_speed: number
    weather: WeatherDescription[]
  }
  
  export type TempEstimation = {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  
  export type TempFeelsLike = {
    day: number
    night: number
    eve: number
    morn: number
  }
  
  export type DailyWeather = {
    dt: number
    sunrise: number
    sunset: number
    humidity: number
    clouds: number
    wind_speed: number
    temp: TempEstimation
    feels_like: TempFeelsLike
    weather: WeatherDescription[]
  }
  
  
  export type CityWeather = {
      dt: number
      city: City;
      timezone: String;
      current: CurrentWeather;
      daily: DailyWeather[]
      isLoading: boolean
      hasError: boolean
  }