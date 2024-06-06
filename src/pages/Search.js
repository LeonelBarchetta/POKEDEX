import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useLocation } from 'react-router-dom'
import { PokemonCard } from '../components/PokemonCard'
import { PokemonProvider } from '../context/PokemonProvider'

export const Search = () => {
  const location = useLocation();

	const { globalPokemons , onClickSearchMore } = useContext(PokemonContext);


  const filterPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

  
  return (
    <div >

      <div className='pokedex'>
        {filterPokemons.map(pokemon =>(
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>

      <div className='boton'>
          <button onClick={onClickSearchMore}>
            Cargar más
          </button>
      </div>
     
    
    </div>
  )
}
