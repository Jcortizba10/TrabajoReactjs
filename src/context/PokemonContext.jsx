import { createContext } from 'react'
import { useGetPokemons } from './hooks/useGetPokemons'


export const PokemonContext = createContext();

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({ children }) => {
  const pokemons = useGetPokemons();

  return (
    <>
      <header style={{textAlign: 'center'}}>
        <h1>LISTADO DE LOS POKEMONES DEL POKEDEX</h1>
      </header>
      <PokemonContext.Provider value={{ pokemons }}>
        {children}
      </PokemonContext.Provider>
    </>
  )
}