import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities/citiesSlice';
import weathersReducer from '../features/weathers/weathersSlice'

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
    weathers: weathersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
