import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CatalogState {
  activeSection: "filter" | "sort" | "category" | null;
  selectedCategory: string | null;
  selectedSort: string;
  selectedColors: string[];
  selectedFormats: string[];
  priceRange: [number, number];
  selectedFlowers: string[];
}

const initialState: CatalogState = {
  activeSection: null,
  selectedCategory: null,
  selectedSort: "popular",
  selectedColors: [],
  selectedFormats: [],
  priceRange: [50, 400],
  selectedFlowers: [],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<"filter" | "sort" | "category" | null>) => {
      state.activeSection = state.activeSection === action.payload ? null : action.payload;
    },
    closeActiveSection: (state) => {
      state.activeSection = null;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    setSelectedSort: (state, action: PayloadAction<string>) => {
      state.selectedSort = action.payload;
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      const index = state.selectedColors.indexOf(action.payload);
      if (index > -1) {
        state.selectedColors.splice(index, 1);
      } else {
        state.selectedColors.push(action.payload);
      }
    },
    toggleFormat: (state, action: PayloadAction<string>) => {
      const index = state.selectedFormats.indexOf(action.payload);
      if (index > -1) {
        state.selectedFormats.splice(index, 1);
      } else {
        state.selectedFormats.push(action.payload);
      }
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    toggleFlower: (state, action: PayloadAction<string>) => {
      const index = state.selectedFlowers.indexOf(action.payload);
      if (index > -1) {
        state.selectedFlowers.splice(index, 1);
      } else {
        state.selectedFlowers.push(action.payload);
      }
    },
    resetFilters: (state) => {
      state.selectedColors = [];
      state.selectedFormats = [];
      state.priceRange = [50, 400];
      state.selectedFlowers = [];
    },
  },
});

export const {
  setActiveSection,
  closeActiveSection,
  setSelectedCategory,
  setSelectedSort,
  toggleColor,
  toggleFormat,
  setPriceRange,
  toggleFlower,
  resetFilters,
} = catalogSlice.actions;

export default catalogSlice.reducer;
