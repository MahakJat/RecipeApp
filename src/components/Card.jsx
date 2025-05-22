import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({recipe}) => {
  return (
    <div className='shadow w-full max-h-80 shrink-0 p-4 rounded-lg flex flex-col items-center bg-zinc-200'>
        <div className="w-40 h-40 bg-zinc-300 overflow-hidden rounded-full">
            <img src={recipe.url} alt="No Image" className="w-full h-full object-cover" />
        </div>
        <h1 className='font-bold mt-2'>{recipe.name ? recipe.name:"Some Recipe"}</h1>
        <p>A delicious cornflower...</p>
        {/* <h4>Time : </h4> */}
        <div className="flex w-full mt-3 items-center border-t-2 border-zinc-400 pt-3">
            <div className="w-1/2 text-center">{recipe.time}min</div>
            <Link to={`/recipe/${recipe.id}`} className='w-1/2 bg-red-950 text-white py-1.5 text-center rounded-full'>View</Link>
        </div>
    </div>
  )
}

export default Card