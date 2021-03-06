const BASE_API_URL = 'https://pokeapi.co/api/v2/pokemon';
export const getPokemons = async (page) => {
  return fetch(`${BASE_API_URL}?offset=${page}&limit=10`)
    .then((res) => res.json())
    .then((data) => {
      return data.results.map((pokemon) => {
        return {
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          url: pokemon.url,
          favorite: false,
        };
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getPokemon = async (name) => {
  return fetch(`${BASE_API_URL}/${name.toLowerCase()}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
