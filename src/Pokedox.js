import React from "react";
import { AppBar, Toolbar, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 16
  }
});

const getCardData = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>Hi</CardContent>
      </Card>
    </Grid>
  );
};

const Pokedox = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>Hi</Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.gridContainer}>
        {getCardData()}
        {getCardData()}
        {getCardData()}
        {getCardData()}
      </Grid>
    </>
  );
};

export default Pokedox;
