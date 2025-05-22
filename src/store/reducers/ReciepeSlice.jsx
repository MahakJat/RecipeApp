import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: JSON.parse(localStorage.getItem("recipes")) || [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    }
  },
});


export default RecipeSlice.reducer;
export const { setRecipes} = RecipeSlice.actions;