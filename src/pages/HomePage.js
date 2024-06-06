import React, { useContext } from 'react'
import { PokemonList } from '../components/PokemonList'
import { PokemonContext } from '../context/PokemonContext'

export const HomePage = () => {
  

  const {onClickLoadMore} = useContext(PokemonContext)
  

  return (
    <>
      <PokemonList/>
      <div className='boton'>
          <button onClick={onClickLoadMore}>
            Cargar más
          </button>
      </div>
    
    </>
  )
}
