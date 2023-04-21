import React, { memo } from "react";
import WeatherFeature from "../atoms/weather-feature";
import { getAmPmTime } from "../../tools";

type WeatherDataProps = {
  tempMax?: number;
  tempMin?: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  windSpeed: number;
};

const WeatherData = ({
  humidity,
  sunrise,
  sunset,
  tempMax,
  tempMin,
  windSpeed,
}: WeatherDataProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-around w-full">
      {tempMax && (
        <div className="flex flex-col items-start">
          <span className="text-jet">Temp</span>
          <WeatherFeature label="Min:" value={`${tempMin}°C`} />
          <WeatherFeature label="Max:" value={`${tempMax}°C`} />
        </div>
      )}
      <div className="flex flex-col items-start">
        <WeatherFeature label="Sunrise" value={getAmPmTime(sunrise)} />
        <WeatherFeature label="Sunset" value={getAmPmTime(sunset)} />
        <WeatherFeature label="Humidity" value={`${humidity}%`} />
        <WeatherFeature label="Wind Speed" value={`${windSpeed}m/s`} />
      </div>
    </div>
  );
};

export default memo(WeatherData);
