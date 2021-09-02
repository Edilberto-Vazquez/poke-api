import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";

// store created

export default configureStore({
  reducer: pokemonReducer,
});
