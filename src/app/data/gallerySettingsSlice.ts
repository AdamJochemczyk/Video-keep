import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type possibleDisplayMethodType = "gallery" | "list";
export type possibleElementsOnPage = 20 | 40 | 60;
export type possibleSortMethods = "oldest" | "newest" | "favorite";

interface IgallerySettingsState {
  displayMethod: possibleDisplayMethodType;
  elementsOnPage: possibleElementsOnPage;
  page: number;
  sortBy: possibleSortMethods;
}

const initialState: IgallerySettingsState = {
  displayMethod: "gallery",
  elementsOnPage: 20,
  page: 1,
  sortBy: "oldest",
};

export const gallerySettingsSlice = createSlice({
  name: "gallerySettings",
  initialState,
  reducers: {
    resetPage: (state)=>{
      state.page=1
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    nextPage: (state) => {
      state.page += 1;
    },
    changeDisplayMethod: (
      state,
      action: PayloadAction<possibleDisplayMethodType>
    ) => {
      state.displayMethod = action.payload;
    },
    changeElementsOnPage: (
      state,
      action: PayloadAction<possibleElementsOnPage>
    ) => {
      state.elementsOnPage = action.payload;
    },
    changeSortBy: (state, action: PayloadAction<possibleSortMethods>) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  prevPage,
  nextPage,
  resetPage,
  changeDisplayMethod,
  changeElementsOnPage,
  changeSortBy,
} = gallerySettingsSlice.actions;

export const selectPage = (state: RootState) => state.gallerySettings.page;

export const selectDisplayMethod = (state: RootState) =>
  state.gallerySettings.displayMethod;

export const selectElementsOnPage = (state: RootState) =>
  state.gallerySettings.elementsOnPage;

export const selectSortBy = (state: RootState) => state.gallerySettings.sortBy;

export default gallerySettingsSlice.reducer;
