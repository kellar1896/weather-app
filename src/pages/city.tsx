import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectCityWeatherByCityCode } from "../features/weathers/weathersSlice";
import PreviewWeatherCard from "../components/organisms/preview-weather-card";
import WeatherForecastCard from "../components/organisms/weather-forecast-card";
import WeatherData from "../components/molecules/weather-data";

const CityPage = () => {
  const { cityId } = useParams();
  const cityWeather = useAppSelector((state) =>
    selectCityWeatherByCityCode(state, cityId)
  );
  if (cityWeather === undefined)
    return (
      <div className="h-screen w-screen bg-jet text-ivory flex justify-center items-center">
        <p className="text-xl font-bold">sorry couldn't load this URL</p>
      </div>
    );
  return (
    <div className="h-screen w-screen overflow-auto bg-jet">
      <div className="w-full py-10 bg-ivory mb-10">
        <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row items-start justify-center">
          <PreviewWeatherCard cityWeather={cityWeather} />
          <WeatherData
            humidity={cityWeather.current.humidity}
            sunrise={cityWeather.current.sunrise}
            sunset={cityWeather.current.sunset}
            windSpeed={cityWeather.current.wind_speed}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-wrap md:flex-row w-full md:w-10/12 mx-auto md:justify-between">
        {cityWeather.daily.map((dailyWeather, index) => {
          return (
            <WeatherForecastCard
              dailyWeather={dailyWeather}
              key={`${cityWeather.city.city_code}_${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CityPage;
