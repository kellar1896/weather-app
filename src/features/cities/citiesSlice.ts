import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { City } from "../../app/types";

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

export const loadCities = createAsyncThunk("users/getAllUsers", async () => {
    // const cities = await userServices.fetchCities();
    return [] as City[];
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

