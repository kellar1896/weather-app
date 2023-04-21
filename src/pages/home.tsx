import React, { useCallback, useState } from "react";
import background from "../assets/weather-background.jpeg";
import InputFiltered from "../components/atoms/input-filtered";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectFilteredCities } from "../features/cities/citiesSlice";
import {
  getCityWeather,
  selectAllWeathers,
  selectCurrentLoadWeather,
} from "../features/weathers/weathersSlice";
import ButtonStyled from "../components/atoms/button-styled";
import SkeletonCards from "../components/atoms/skeleton-cards";
import { CityWeather } from "../app/types/weather";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [searchWord, setSearchWord] = useState("");
  const filteredCities = useAppSelector((state) =>
    selectFilteredCities(state, searchWord)
  );
  const listWeathers = useAppSelector(selectAllWeathers);
  const isLoadingCity = useAppSelector(selectCurrentLoadWeather);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  }, []);

  const addNewWeatherCity = useCallback(() => {
    if (
      listWeathers.filter(
        (element) => element.city.city_code === filteredCities[0].city_code
      ).length > 0
    )
      return;
    dispatch(getCityWeather(filteredCities[0]));
  }, [dispatch, filteredCities, listWeathers]);

  const renderCityPreview = useCallback((cityWeather: CityWeather, index: number)=>{
    const { city, current, timezone, isLoading, hasError } = cityWeather;
    if (isLoading) {
        return (
          <SkeletonCards key={`${city.city_code}_weather_${index}`} />
        );
      } else if (hasError) {
        return <span>Algo esta cargando mal</span>;
      } else {
        return (
          <div key={`${city.city_code}_weather_${index}`}>
            <span>{current.temp}</span>
            <span>{city.name}</span>
            <span>{timezone}</span>
          </div>
        );
      }
  },[])

  console.log(listWeathers, "climas");
  return (
    <section className="h-screen">
      <div className="relative w-full h-4/6 md:h-3/5 flex  items-end">
        <img
          src={background}
          alt="weather-bg"
          className="absolute w-full h-full -z-10 object-fit"
        />
        <div className="w-11/12 md:w-8/12 mx-auto  bg-black/60 flex items-start flex-col md:flex-row mb-20 p-10 rounded-xl justify-between">
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-4xl text-ivory font-bold">
              Welcome to Weather Report
            </h1>
            <p className="w-full md:w-1/2 text-justify md:text-left text-sm text-ivory">
              {listWeathers.length === 0
                ? "currently you don't have any city in your list, search for one and add it to your track list"
                : "Take a look of the weather in your favorite cities"}
            </p>
          </div>
          <div>
            <InputFiltered
              onChange={handleSearch}
              options={filteredCities}
              placeholder="search for a city"
            />

            <ButtonStyled
              onClick={addNewWeatherCity}
              text="Add City"
              isLoading={isLoadingCity}
            />
          </div>
        </div>
      </div>
      <div className="bg-powderBlue  h-auto md:h-2/5 py-10">
        <div className="flex flex-col w-full md:w-10/12 mx-auto items-start">
          <h3 className="text-jet font-bold text-base md:text-lg">
            Cities Forecast
          </h3>
          {listWeathers.length === 0 ? (
            <SkeletonCards />
          ) : (
            <div className="flex flex-col md:flex-row overflow-x-auto w-full">
                {listWeathers.map(renderCityPreview)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
