import React, { useState } from "react";
import background from "../assets/weather-background.jpeg";
import InputFiltered from "../components/atoms/input-filtered";
import { useAppSelector } from "../app/hooks";
import { selectFilteredCities } from "../features/cities/citiesSlice";

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const filteredCities = useAppSelector((state) =>
    selectFilteredCities(state, searchWord)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };


  return (
    <section className="h-screen">
      <div className="relative w-full h-4/6 md:h-3/5 flex  items-end">
        <img
          src={background}
          alt="weather-bg"
          className="absolute w-full h-full -z-10 object-fit"
        />
        <div className="w-11/12 md:w-8/12 mx-auto  bg-black/50 flex items-start flex-col md:flex-row mb-20 p-10 rounded-xl">
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-4xl text-white font-bold">
              Welcome to Weather Report
            </h1>
            <p className="w-full md:w-1/2 text-justify md:text-left text-sm text-white">
              currently you don't have any city in your list, search for one and
              add it to your track list
            </p>
          </div>
          <div>
            <InputFiltered onChange={handleSearch} options={filteredCities} placeholder="search for a city" />
            <button className="bg-blue-500 w-full h-10 rounded-xl text-white font-bold">
              Add City
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 h-2/5">
        <h3>title</h3>
        <span>{searchWord}</span>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
