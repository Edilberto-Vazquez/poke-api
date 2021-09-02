import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import PokemonList from "./pages/PokemonList";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
