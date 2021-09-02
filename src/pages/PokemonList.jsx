import React from "react";
import "../assets/styles/App.scss";
import useGetData from "../hooks/useGetData";
import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";

const PokemonList = () => {
  useGetData("https://pokeapi.co/api/v2/pokemon-form/");
  const pokemon = useSelector((state) => state.pokemonList);
  return (
    <div>
      <div className="pokemon-list">
        {pokemon.map((element, index) => (
          <PokemonCard
            key={index}
            name={element.name}
            img={element.sprites.front_default}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
