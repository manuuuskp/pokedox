import React from "react";

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;

  return <h1>{`This is a pokemon of pokemonID #${pokemonId}`}</h1>;
};

export default Pokemon;
