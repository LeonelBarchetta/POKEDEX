import React, { useContext } from 'react'
import search from '../img/search.svg'
import { PokemonContext } from '../context/PokemonContext'
import {Outlet, useNavigate} from "react-router-dom"


export const Navigation = () => {


  const { valueSearch,
    onInputChange,onResetForm} = useContext(PokemonContext)

 const navigate = useNavigate()


  const onSearchSubmit = (e) =>{
    e.preventDefault()
    navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
  }

  return (
    <>
        <header>
           <nav className='InputSearch'>

           <form onSubmit={onSearchSubmit}>
             <div>
                 <input 
                 type='search'
							   name='valueSearch'
							   id=''
                 value={valueSearch}
                 onChange={onInputChange}
                 placeholder='Buscar Pokémon' />

                <img alt='' src={search} />
            </div>
           </form>

           
               
           </nav>
           
        </header>
        <Outlet/>
    </>
  )
}
