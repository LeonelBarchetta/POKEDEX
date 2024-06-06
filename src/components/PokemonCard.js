import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonCard = ({pokemon}) => {
    const formattedId = pokemon.id.toString().padStart(3, '0');
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  return (
    <div className='card'>
        <Link to={`/pokemon/${pokemon.id}`}>
        
        <div className='img'>
            <img
                src={pokemon.sprites.other.home.front_default}
                alt={`Pokemon ${pokemon.name}`}
            />
		</div>

		<div className='target'>
            <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
            <span>#{formattedId}</span>
         
		</div>

        </Link>
    </div>
  )
}
