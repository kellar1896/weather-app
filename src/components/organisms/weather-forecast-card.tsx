import React, { memo } from "react";
import { DailyWeather } from "../../app/types/weather";
import { getIconImage } from "../../tools/iconsProvider";
import { getDate, getDay, getMonth } from "../../tools";
import WeatherData from "../molecules/weather-data";

type WeatherForecastCardProps = {
  dailyWeather: DailyWeather;
};

const WeatherForecastCard = ({ dailyWeather }: WeatherForecastCardProps) => {
  return (
    <div className="bg-powderBlue rounded-2xl w-full md:w-96 flex items-center justify-around p-2 flex-shrink-0 m-2 text-ivory">
      <img
        src={getIconImage(dailyWeather.weather[0].icon)}
        className="w-24"
        alt=""
      />
      <div className="flex flex-col items-start w-full">
        <div className="flex items-end justify-between w-10/12">
          <span className="font-extrabold text-3xl">
            {getDay(dailyWeather.dt)}
          </span>
          <div className="flex flex-col">
            <span className="text-sm">
              {getMonth(dailyWeather.dt)}, {getDate(dailyWeather.dt)}
            </span>
            <p className="text-jet font-bold text-sm md:text-xs">
              {dailyWeather.weather[0].description}
            </p>
          </div>
        </div>
        <WeatherData humidity={dailyWeather.humidity} sunrise={dailyWeather.sunrise} sunset={dailyWeather.sunset}  tempMax={dailyWeather.temp.max}  tempMin={dailyWeather.temp.min}  windSpeed={dailyWeather.wind_speed} />
      </div>
    </div>
  );
};

export default memo(WeatherForecastCard);
