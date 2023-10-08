import { useEffect, useState} from 'react'
import axios from 'axios';

export function useGetPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=90');
      const pokemonResponse = await Promise.all(
        response.data.results.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return pokemonData.data;
      }
      ));
      setPokemons(pokemonResponse);
    }
    pokemons.length === 0 && getPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemons]);

  return pokemons
}
