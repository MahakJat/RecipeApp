import { setRecipes } from "../reducers/ReciepeSlice";

export const createRecipe = (newRecipe,navigate) => (dispatch, getState) => {
  const { recipes } = getState().RecipeReducer;
  const updateRecipes = [newRecipe, ...recipes];
  dispatch(setRecipes(updateRecipes));
  localStorage.setItem("recipes", JSON.stringify(updateRecipes));
  navigate('/recipes')
};

export const updateRecipes = (updateRecipe,navigate) => (dispatch, getState) => {
  const { recipes } = getState().RecipeReducer;
  const updateRecipes = recipes.map(r => r.id === updateRecipe.id ? updateRecipe : r)
  dispatch(setRecipes(updateRecipes));
  localStorage.setItem("recipes", JSON.stringify(updateRecipes));
  navigate(`/recipe/${updateRecipe.id}`)
};
