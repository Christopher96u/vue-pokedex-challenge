export default {
  pokemons: (state) => state.pokemons,
  filteredPokemons: (state) => state.filteredPokemons,
  pokemon: (state) => state.pokemon,
  getShowAllPokemonsByDefault: (state) => state.showAllPokemonsByDefault,
  favoritePokemons: (state) => state.pokemons.filter((pokemon) => pokemon.favorite === true),
  buttonAllIsActive: (state) => state.buttonAllIsActive,
  buttonFavoriteIsActive: (state) => state.buttonFavoriteIsActive,
};
