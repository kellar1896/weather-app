import React, { memo } from "react";
import { DailyWeather } from "../../app/types/weather";
import { getIconImage } from "../../tools/iconsProvider";
import { getAmPmTime, getDate, getDay, getMonth } from "../../tools";
import WeatherFeature from "../atoms/weather-feature";

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
        <div className="flex flex-row justify-around w-full">
          <div className="flex flex-col items-start">
            <span className="text-jet">Temp</span>
            <WeatherFeature label="Min:" value={`${dailyWeather.temp.min}°C`} />
            <WeatherFeature label="Max:" value={`${dailyWeather.temp.max}°C`} />
          </div>
          <div className="flex flex-col items-start">
            <WeatherFeature
              label="Sunrise"
              value={getAmPmTime(dailyWeather.sunrise)}
            />
            <WeatherFeature
              label="Sunset"
              value={getAmPmTime(dailyWeather.sunset)}
            />
            <WeatherFeature
              label="Humidity"
              value={`${dailyWeather.humidity}%`}
            />
            <WeatherFeature
              label="Wind Speed"
              value={`${dailyWeather.wind_speed}m/s`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(WeatherForecastCard);
