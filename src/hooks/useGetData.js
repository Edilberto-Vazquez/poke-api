import { useEffect } from "react";
import { addPokemon } from "../features/pokemon/pokemonSlice";
import { useDispatch } from "react-redux";
import getData from "../utils/getData";

const useGetData = (api) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const res = getData(api);
    res.then((result) => {
      result.forEach((e) => e.then((a) => dispatch(addPokemon(a))));
    });
  }, []);
};

export default useGetData;
