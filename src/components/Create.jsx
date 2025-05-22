import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../store/actions/RecipeAction";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [url, seturl] = useState("");
  const [name, setname] = useState("");
  const [ingredients, setingredients] = useState("");
  const [steps, setsteps] = useState("");
  const [time, settime] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const submitHandler = (e) => {
    e.preventDefault();

    let newRecipe = {
      url,
      name,
      id:nanoid(),
      ingredients: ingredients.split(","),
      steps: steps.split(","),
      time,
    };

    dispatch(createRecipe(newRecipe,navigate));

  
    seturl('')
    setname('')
    setingredients('')
    setsteps('')
    settime(0)
    
    console.log("form submitted");
  };

  const addIngredientHandler = () => {};

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg pt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create a New Recipe
      </h2>
      <form onSubmit={submitHandler} className="space-y-6">
        {/* Image URL */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            onChange={(e) => seturl(e.target.value)}
            value={url}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm py-2 px-3"
            placeholder="Enter image URL"
          />
        </div>

        {/* Recipe Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm py-2 px-3"
            placeholder="Enter recipe name"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700"
          >
            Ingredients
          </label>
          <textarea
            id="ingredients"
            rows="3"
            value={ingredients}
            onChange={(e) => setingredients(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm py-2 px-3"
            placeholder="Enter ingredients (comma-separated)"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700"
          >
            Steps
          </label>
          <textarea
          value={steps}
            onChange={(e) => setsteps(e.target.value)}
            id="steps"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm py-2 px-3"
            placeholder="Enter steps for the recipe"
          ></textarea>
        </div>

        {/* Time Required */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time Required (in minutes)
          </label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => settime(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring-red-800 sm:text-sm py-2 px-3"
            placeholder="Enter time required"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-red-950 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800 focus:ring-offset-2"
          >
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
