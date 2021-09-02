const getPokemon = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pokemonList = data.results.map((item) => getPokemon(item.url));
    return pokemonList;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default getData;
