import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonList: [],
  },

  reducers: {
    addPokemon: (state, action) => {
      state.pokemonList.push(action.payload);
    },
  },
});

export const { addPokemon } = slice.actions;

export default slice.reducer;
