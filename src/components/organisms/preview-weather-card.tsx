import React, { memo, useCallback } from "react";
import { CityWeather } from "../../app/types/weather";
import iconWeather from "../../assets/icons/day/01d.png";
import { getIconImage } from "../../tools/iconsProvider";
import { getAmPmTime, getDay } from "../../tools";

type PreviewWeatherCardProps = {
  cityWeather: CityWeather;
  onClick?: () => void;
};


const PreviewWeatherCard = ({
  cityWeather,
  onClick,
}: PreviewWeatherCardProps) => {
  const renderTimeZone = useCallback(() => {
    if (cityWeather?.isLoading) return "---";
    return cityWeather?.timezone
  }, [cityWeather]);

  const renderTemp = useCallback(()=>{
    if (cityWeather?.isLoading) return "---";
    return  `${cityWeather?.current.temp} °C`
  },[cityWeather])

  const renderFeelsLike = useCallback(()=>{
    if (cityWeather?.isLoading) return "---";
    return `${cityWeather?.current.feels_like} °C`
  },[cityWeather])

  const renderHumidity = useCallback(()=>{
    if (cityWeather?.isLoading) return "---";
    return `${cityWeather?.current.humidity}%`
  },[cityWeather])

  const renderIconImage = useCallback(()=>{
    if(cityWeather.isLoading) return iconWeather
    // return `http://openweathermap.org/img/wn/${cityWeather?.current.weather[0].icon}@2x.png`
    return getIconImage(cityWeather.current.weather[0].icon)
  },[cityWeather])

  const renderDay = useCallback(()=>{
    if(cityWeather.isLoading) return "---"
    return getDay(cityWeather?.current.dt)
  },[cityWeather])

  const renderHour = useCallback(()=>{
    if(cityWeather.isLoading) return "---"
    return getAmPmTime(cityWeather?.current.dt)
  },[cityWeather])

  return (
    <div className="bg-ivory rounded-xl p-2 text-jet w-64 flex-shrink-0 cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-start">
        <h4 className="font-bold text-lg">{cityWeather?.city.name}</h4>
        <span className="text-xs">
          {renderDay()}, {renderHour()}, Time Zone: {renderTimeZone()}
        </span>
      </div>
      <div>
        <div className="flex items-center justify-around">
          <img src={renderIconImage()} alt="current_weather" className="w-16" />
          <span className="font-extrabold text-xl md:text-2xl">
            {renderTemp()}
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <span>Feels like {renderFeelsLike()}</span>
          <span>Humidity {renderHumidity()}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(PreviewWeatherCard);
