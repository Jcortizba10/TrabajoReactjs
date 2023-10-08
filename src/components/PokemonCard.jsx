import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './pokemonCard.css'

export default function PokemonCard({ pokemon }) {
  const imgUrl = pokemon.sprites.other["official-artwork"].front_default;


  return (
    <Link to={`/detail/${pokemon.id}`}>
      <Card>
        <img src={imgUrl} alt={pokemon.name} />
        <Name>{pokemon.name}</Name>
        <p>{pokemon.types.map(({ type }) => type.name).join(", ")}</p>
        <p>
          <span className="pokemonId">#{pokemon.id}</span>
        </p>
      </Card>
    </Link>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    sprites: PropTypes.object,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number,
  }).isRequired,
};

const Card = styled.div`
  display: flex;
  background : #F5E8B7;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  min-width: 200px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 7px 8px -3px rgba(0,0,0,0.75);

  &:hover {
    box-shadow: inset 0px 7px 8px -3px rgba(0,0,0,0.75);
    cursor: pointer;
  }


  img {
    width: 150px;
    height: 150px;
  }

  h3 {
    font-size: 25px;
  }

  p {
    font-size: 16px;
  }
`;

const Name = styled.h3`
  text-transform: capitalize;
`;
