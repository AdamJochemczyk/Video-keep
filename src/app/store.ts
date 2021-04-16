import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gallerySettingsReducer from './data/gallerySettingsSlice';

export const store = configureStore({
  reducer: {
    gallerySettings: gallerySettingsReducer,
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
