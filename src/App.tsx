import React, { useEffect } from "react";
import "./App.css";
import { loadCities } from "./features/cities/citiesSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import LoadingIntro from "./components/molecules/loading-intro";

function App() {
  const dispatch = useAppDispatch();
  const cities = useAppSelector((state) => state.cities.cities);
  const isLoadingCities = useAppSelector((state) => state.cities.isLoading)

  useEffect(() => {
    dispatch(loadCities());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoadingCities ? <LoadingIntro /> : null}
      {cities.slice(0,100).map((city, index) => 
        <span key={`city_${index}`}>{city.name}</span>
      )}
    </div>
  );
}

export default App;
