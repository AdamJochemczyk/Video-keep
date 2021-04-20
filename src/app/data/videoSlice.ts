import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { demoVideos } from "./demoVideos";

export interface VideoData {
  id: string;
  addedAt: string;
  isFavorite: boolean;
  videoPlatform: string;
}

const initialState: VideoData[] = [];

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<VideoData>) => {
      state.push(action.payload);
    },
    addVideoToFavoriteByVideoId: (state, action: PayloadAction<VideoData>) => {
      state.map((video) => {
        if (video.id === action.payload.id) {
          video.isFavorite = true;
        }
        return video;
      });
    },
    deleteVideo: (state, action: PayloadAction<VideoData>) => {
      return state.filter(video=>
       video.id !== action.payload.id
      );
    },
    deleteAll: () => {
      return [];
    },
    showDemoVideos: () => {
      return demoVideos;
    },
    showMyVideos: () => {
      //TODO: data from DB
      return [
        {
          id: "XLLeYojb9K4",
          addedAt: "myvideo",
          isFavorite: false,
          videoPlatform: "youtube",
        },
      ];
    },
  },
});

export const {
  addVideo,
  addVideoToFavoriteByVideoId,
  deleteVideo,
  deleteAll,
  showDemoVideos,
  showMyVideos,
} = videoSlice.actions;

export const selectVideos = (state: RootState) => {
  return state.videos;
};

export const selectVideoCount = (state: RootState) => {
  return state.videos.length;
};

export const selectMaxPage = (state: RootState) => {
  const elementsOnPage = state.gallerySettings.elementsOnPage;
  const maxPage = Math.ceil(state.videos.length / elementsOnPage);
  return maxPage <= 1 ? 1 : maxPage + 1;
};

export default videoSlice.reducer;