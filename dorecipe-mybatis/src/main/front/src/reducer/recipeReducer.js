import { createSlice } from "@reduxjs/toolkit";
export const recipeReducer = createSlice({
  name: "recipe",
  initialState: {
    recipeInfo: null,
  },
});
