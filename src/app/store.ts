import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import citiesReducer from '../features/cities/citiesSlice';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
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
