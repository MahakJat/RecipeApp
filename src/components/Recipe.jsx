import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();

  const { recipes } = useSelector((state) => state.RecipeReducer);
  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <div className="mx-auto w-[50vw] pt-16 pb-10">
      <div className="flex flex-col w-full items-center justify-center bg-blue-200/[0] ">
        <div className="h-80 w-full rounded-3xl overflow-hidden">
          <img className="h-full w-full object-cover" src={recipe.url} alt="" />
        </div>
        <div className="flex w-full my-4 gap-4">
          <Link
            to={`/update/${id}`}
            className="w-1/2 text-red-950 border-2 text-center border-red-950 py-2.5 uppercase rounded-full"
          >
            Edit Recipe
          </Link>
          <button className="w-1/2 bg-red-950 border-2 border-transparent text-white py-2.5 uppercase rounded-full">
            Delete Recipe
          </button>
        </div>
        <h1 className="text-3xl mb-4">{recipe.name}</h1>
        <div className="w-full mb-4">
          <h2 className="self-center text-red-800 font-semibold mb-1">
            Ingredients
          </h2>
          <div className=" flex gap-4 pt-2">
            {recipe.ingredients.map((ingre, i) => (
              <h4 key={i} className="px-6 bg-zinc-200 rounded-full py-1.5">
                {ingre.trim()}
              </h4>
            ))}

          </div>
        </div>
        <div className="w-full">
          <h2 className="text-red-800 font-semibold mb-1">Steps</h2>
          <ul className="">
            {recipe.steps.map((step, i) => (
              <li key={i} className="list-decimal ml-6">{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
