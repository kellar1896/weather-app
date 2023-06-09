import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CitiesServices } from "../../services/cities.Service";
import { RootState } from "../../app/store";
import { City } from "../../app/types/cities";

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

export const selectAllCities = (state: RootState) => state.cities.cities

export const selectFilteredCities = (state: RootState, searchTerm: string)=> {
    const allCities = selectAllCities(state);
    const filteredCities = allCities.filter((city)=> city.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return filteredCities.slice(0,10);
}

export default citiesSlice.reducer;

