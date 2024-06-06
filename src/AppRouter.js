import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { PokemonPage } from './pages/PokemonPage'
import { HomePage } from './pages/HomePage'
import { Search } from './pages/Search'

export const AppRouter = () => {
  return <Routes>

    <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='pokemon/:id' element={<PokemonPage/>}/>
        <Route path='search' element={<Search/>}/>
    </Route>

    <Route path='*' element={<Navigate to="/" />}/>

  </Routes>
}
