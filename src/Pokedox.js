import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import data from "./data";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: 20,
    paddingRight: 50,
    paddingLeft: 50
  },
  cardMedia: {
    margin: "auto"
  },
  cardConent: {
    textAlign: "center"
  }
});

const getPokeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Pokedox = () => {
  const [pokedoxData, setPokedoxData] = useState(data);
  const classes = useStyles();
  const history = useHistory();

  const getCardData = (pokeId) => {
    const { id, name, sprites } = pokedoxData[pokeId];
    return (
      <Grid item xs={12} md={4} sm={6} key={id}>
        <Card
          onClick={() => history.push(`/${pokeId}`)}
          style={{ height: "300px", width: "300px" }}
        >
          <CardMedia
            style={{ width: "130px", height: "130px" }}
            image={sprites["front_default"]}
            className={classes.cardMedia}
          />
          <CardContent className={classes.cardConent}>
            <Typography>{`${id}.${getPokeName(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>Hi</Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.gridContainer}>
        {Object.keys(pokedoxData).map((pokeId) => getCardData(pokeId))}
      </Grid>
    </>
  );
};

export default Pokedox;
