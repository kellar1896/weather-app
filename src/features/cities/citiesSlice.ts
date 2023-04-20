import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { City } from "../../app/types";
import { CitiesServices } from "../../services/cities.Service";

export interface CitiesState {
    cities: City[];
    isLoading: boolean;
    hasError: boolean;
}

const initialState: CitiesState  = {
    cities: [],
    isLoading: false,
    hasError: false
}

export const loadCities = createAsyncThunk("cities/getCities", async () => {
    const citiesService = new CitiesServices()
    const cities = await citiesService.fetchCities();
    return cities.response;
  });

export const citiesSlice = createSlice({
    initialState: initialState,
    name: 'cities',
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(loadCities.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loadCities.fulfilled, (state, action) => {
            state.cities = action.payload
            state.hasError = false;
            state.isLoading = false;
          })
          .addCase(loadCities.rejected, (state) => {
            state.hasError = true;
            state.isLoading = false;
          });
    },
});

export default citiesSlice.reducer;

