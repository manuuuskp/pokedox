import React from "react";
import { Typography, Button } from "@material-ui/core";
import data from "./data";
import { useHistory } from "react-router-dom";

const Pokemon = (props) => {
  const history = useHistory();
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const { name, id, sprites, height, weight, types } = data[pokemonId];
  const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  return (
    <>
      <Typography variant="h1">{`${id}.${name}`}</Typography>
      <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
      <Typography variant="h3">Pokemon Info</Typography>
      <Typography variant="h6">{`species : ${name}`}</Typography>
      <Typography variant="h6">{`height : ${height}`}</Typography>
      <Typography variant="h6">{`weight : ${weight}`}</Typography>
      <Typography variant="h5">Types:</Typography>
      {types.map((data) => (
        <Typography>{data["type"]["name"]}</Typography>
      ))}
      <Button variant="contained" onClick={() => history.push("/")}>
        Back to PokeDox
      </Button>
    </>
  );
};

export default Pokemon;
