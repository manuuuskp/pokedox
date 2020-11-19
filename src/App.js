import React from "react";
import "./styles.css";
import Pokemon from "./Pokemon";
import Pokedox from "./Pokedox";

import { Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedox {...props} />} />
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <Pokemon {...props} />}
      />
    </Switch>
  );
};

export default App;
