import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Recipes = () => {

  const {recipes} = useSelector(state => state.RecipeReducer)
  
  console.log(recipes)

  // const cards =[]


  return (
    <div className='w-full min-h-screen bg-[#f4f5f7]  pt-16 px-20'>
        <h1 className='my-4 text-5xl mb-10'>Our Recipies</h1>
        <div className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {recipes.map((card,i) =><Card key={i} recipe={card}/>)}
        </div>
    </div>
  )
}

export default Recipes