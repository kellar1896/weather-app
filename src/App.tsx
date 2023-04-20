import React, { useEffect } from "react";
import "./App.css";
import { loadCities } from "./features/cities/citiesSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import LoadingIntro from "./components/molecules/loading-intro";
import Router from "./router";

function App() {
  const dispatch = useAppDispatch();
  const isLoadingCities = useAppSelector((state) => state.cities.isLoading)

  useEffect(() => {
    dispatch(loadCities());
  }, [dispatch]);

  return (
    <div className="App font-mono">
      {isLoadingCities ? <LoadingIntro /> : null}
      <Router />
    </div>
  );
}

export default App;
