import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gallerySettingsReducer from './data/gallerySettingsSlice';
import videosReducer from './data/videoSlice';

export const store = configureStore({
  reducer: {
    gallerySettings: gallerySettingsReducer,
    videos: videosReducer,
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
