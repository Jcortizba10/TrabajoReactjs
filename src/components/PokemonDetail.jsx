// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import './pokemonDeta.css'; // Agregar un archivo CSS para los estilos

export default function PokemonDetail() {
  const { pokemonId } = useParams();
  const { pokemons } = useContext(PokemonContext);

  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(pokemonId));

  const imgUrl = pokemon.sprites.other["official-artwork"].front_default;
  return (
    <div className="pokemon-detail-container">
      <Link to=".." className="back-link"><b>Back</b></Link>
      <img src={imgUrl} alt={pokemon.name} className="pokemon-image" />
      <p className="pokemon-name">{pokemon.name}</p>
      <p className="pokemon-types">
        {pokemon.types.map(({ type }) => type.name).join(", ")}
      </p>
      <p>
        <span className="pokemon-id">#{pokemon.id}</span>
      </p>
    </div>
  )
}
