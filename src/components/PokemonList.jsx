import { useContext } from 'react'
import PokemonCard from './PokemonCard'
import { PokemonContext } from '../context/PokemonContext'
import styled from "styled-components";

export default function PokemonList() {
  const { pokemons } = useContext(PokemonContext);

  return (
    <Container> 
      {
        pokemons.length > 0 && pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
