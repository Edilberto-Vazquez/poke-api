import React from "react";

const PokemonCard = ({ name, img }) => {
  return (
    <div>
      <span>{name}</span>
      <img src={img} alt={name} />
    </div>
  );
};

export default PokemonCard;
