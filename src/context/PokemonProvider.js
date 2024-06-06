import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hook/useForm'

export const PokemonProvider = ({children}) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [limite, setLimite] = useState(600)
    const [loading, setLoading] = useState(true);
    
	  

    const {valueSearch,onInputChange,onResetForm} = useForm({
      valueSearch:""
    })


    const getAllPokemons = async(limit=50) =>{

        const baseURL = "https://pokeapi.co/api/v2/"

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json();


        const promises= data.results.map(async(pokemon)=>{
          const res= await fetch(pokemon.url)
          const data= await res.json()
          return data
        })
        const results = await Promise.all(promises)
       
        setAllPokemons([...allPokemons, ...results]);
		    setLoading(false);
       
    }

    const getGlobalPokemons = async() =>{

      
          const baseURL = "https://pokeapi.co/api/v2/"

      const res = await fetch(`${baseURL}pokemon?limit=${limite}&offset=0`)
    
      const data = await res.json();

      


      const promises= data.results.map(async(pokemon)=>{
        const res= await fetch(pokemon.url)
        const data= await res.json()
        return data
      })
      const results = await Promise.all(promises)
    
      setGlobalPokemons(results)
      setLoading(false);
   
    }

    

    const getPokemonByID = async(id) =>{
      const baseURL = "https://pokeapi.co/api/v2/"

      const res = await fetch(`${baseURL}pokemon/${id}`)
      const data = await res.json();
      return data
    }
 
    useEffect(() => {
      getAllPokemons()
    }, [offset])

   
    
    useEffect(() => {
      getGlobalPokemons()
    }, [limite])

    const onClickLoadMore = () => {
      setOffset(offset + 50);
    };

    const onClickSearchMore = () => {
      setLimite(limite + 500);
    };

  return (
    <PokemonContext.Provider value ={{
     valueSearch,
				onInputChange,
				onResetForm,
				allPokemons,
				globalPokemons,
				getPokemonByID,
				onClickLoadMore,
        onClickSearchMore,
				// Loader
				loading,
				setLoading,
    }}
    >
       {children}
    </PokemonContext.Provider>
  )
}
