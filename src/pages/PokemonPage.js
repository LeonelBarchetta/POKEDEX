import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { Link, useParams, } from 'react-router-dom'
import { Loader } from '../components/Loader'


export const PokemonPage = () => {

  const {getPokemonByID} = useContext(PokemonContext)

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  

  const {id} = useParams()

  const fetchPokemon = async(id) =>{
	setLoading(true);
    const data= await getPokemonByID(id)
    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
   fetchPokemon(id)
  }, [id])
  
  const formatId = (id) => {
    return id.toString().padStart(3, '0'); // Formatea el id para que tenga al menos 4 dígitos
  };

  
const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const pokemonId = parseInt(id, 10);
  const previousId = pokemonId > 1 ? pokemonId - 1 : 1;
  const nextId = pokemonId + 1;

  return (
    <main>
			{loading ? (
				<Loader/>
			) : (
				<>

					<div className='PokemonPage'>
						<div>
							<Link style={{fontSize:"1.5rem",color:"black",textDecoration:"none",border:"0.1rem solid gray",padding:"1rem",borderRadius:"0.1rem"}} to={`/pokemon/${previousId}`}>#{formatId(pokemon.id - 1)}</Link>
						</div>

						<div className='info'>
							<div>
								<img
									src={pokemon.sprites.other.home.front_default}
									alt={`Pokemon ${pokemon?.name}`}
								/>
							</div>

							<div className='info2'>
								<div style={{display:"flex" , alignItems:"center", gap:"1rem", marginBottom:"3rem"}}>
									<h1>{capitalizeFirstLetter(pokemon.name)}</h1>
									<span style={{fontSize:"4rem"}}>#{formatId(pokemon.id)}</span>
								</div>
								<div style={{marginBottom:"3rem"}}>
									<div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
										<p style={{fontSize:"2rem"}}>Height</p>
										<p style={{fontSize:"2rem"}}>Type</p>
									</div>
									<div style={{display:"flex",justifyContent:"space-between"}}>
										<span style={{fontSize:"2rem"}}>{(pokemon.height / 10).toFixed(1)} m</span>

										<div>
											{pokemon.types.map(type => (
												<span style={{fontSize:"2rem"}} key={type.type.name} className={`${type.type.name}`}>
													{type.type.name}
												</span>
									       ))}
										</div>

										
									</div>
								</div>
								<div style={{marginBottom:"4rem"}}>
									<div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
										<p style={{fontSize:"2rem"}}>Weight</p>
										<p style={{fontSize:"2rem"}}>Abilities</p>
										</div>
										<div style={{display:"flex",justifyContent:"space-between"}}>
											<span style={{fontSize:"2rem"}}>{(pokemon.weight / 10).toFixed(1)} KG</span>

											<div style={{fontSize:"2rem"}}>
												{pokemon.abilities[0]?.ability.name}
											</div>

											
										</div>
									</div>

								<div style={{display:"flex",justifyContent:"center"}}>
									<Link style={{fontSize:"2rem",color:"black",textDecoration:"none",border:"0.1rem solid gray",padding:"1rem",fontWeight:"bolder"}} to={`/`}>Volver</Link>
								</div>
					
								
							</div>
						</div>


						<div>
						<Link style={{fontSize:"1.5rem",color:"black",textDecoration:"none",border:"0.1rem solid gray",padding:"1rem",borderRadius:"0.1rem"}} to={`/pokemon/${nextId}`}>#{formatId(pokemon.id + 1)}</Link>
						</div>
					</div>
					
				</>
			)}
		</main>
  )
}
