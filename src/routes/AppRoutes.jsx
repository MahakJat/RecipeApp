import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Recipes from '../components/Recipes'
import Create from '../components/Create'
import Update from '../components/Update'
import Recipe from '../components/Recipe'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes