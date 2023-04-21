import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { CityWeather } from "../../app/types/weather";
import { WeatherService } from "../../services/weather.Service";
import { City } from "../../app/types/cities";

export interface WeathersState {
  weathers: CityWeather[];
  currentLoadWeather: boolean;
}

const initialState: WeathersState = {
  weathers: [],
  currentLoadWeather: false,
};

export const weathersSlice = createSlice({
  initialState: initialState,
  name: "weathers",
  reducers: {
    addWeather: (state, action: PayloadAction<CityWeather>) => {
      state.weathers.push(action.payload);
    },
    updateWeather: (state, action: PayloadAction<CityWeather>) => {
      const index = state.weathers.findIndex(
        (weather) => weather.city.city_code === action.payload.city.city_code
      );
      state.weathers[index] = action.payload;
    },
    setErrorLoadWeather: (state, action: PayloadAction<City>) => {
      const index = state.weathers.findIndex(
        (weather) => weather.city.city_code === action.payload.city_code
      );
      state.weathers[index].hasError = true;
      state.weathers[index].isLoading = false;
    },
    setCurrentLoadWeather: (state) => {
      state.currentLoadWeather = true;
    },
    cleanCurrentLoadWeather: (state) => {
      state.currentLoadWeather = false;
    },
  },
});

const {
  addWeather,
  updateWeather,
  setErrorLoadWeather,
  cleanCurrentLoadWeather,
  setCurrentLoadWeather,
} = weathersSlice.actions;

export const getCityWeather =
  (city: City): AppThunk =>
  async (dispatch, getState) => {
    const weatherService = new WeatherService();
    const newCityWeather = {
      city: city,
      isLoading: true,
      hasError: false,
    } as CityWeather;
    dispatch(addWeather(newCityWeather));
    dispatch(setCurrentLoadWeather());
    try {
      const weather = await weatherService.fetchWeather(city);
      const updatedWeather = {
        ...newCityWeather,
        ...weather,
        isLoading: false,
      } as CityWeather;
      dispatch(updateWeather(updatedWeather));
    } catch (error) {
        dispatch(setErrorLoadWeather(city));
    }
    dispatch(cleanCurrentLoadWeather());
  };

export const selectAllWeathers = (state: RootState) => state.weathers.weathers;
export const selectCurrentLoadWeather = (state: RootState) => state.weathers.currentLoadWeather;

export default weathersSlice.reducer;
