export default {
  FETCH_ALL_POKEMONS: (state, pokemons) => {
    const favoritePokemons = state.pokemons.filter((p) => p.favorite === true);
    const newPokemons = pokemons.filter((p) => !favoritePokemons.find((f) => f.name === p.name));
    state.pokemons = state.pokemons.concat(newPokemons);
  },
  SET_POKEMONS: (state, pokemons) => {
    state.pokemons = pokemons;
  },
  SET_FILTERED_POKEMONS: (state, filteredPokemons) => {
    state.filteredPokemons = filteredPokemons;
  },
  SHOW_ALL_POKEMONS_BY_DEFAULT: (state, canShowAllPokemons) => {
    state.showAllPokemonsByDefault = canShowAllPokemons;
  },
  SET_POKEMON: (state, pokemon) => {
    state.pokemon = pokemon;
  },
  SET_1_POKEMON: (state, pokemon) => {
    const existPokemon = state.pokemons.find((item) => item.name === pokemon.name);
    if (!existPokemon) {
      state.pokemons = state.pokemons.concat(pokemon);
    }
  },
  ADD_POKEMON_STATUS: (state, status) => {
    state.pokemon.favorite = status;
  },
  CHANGE_STATUS_ALL_IS_ACTIVE_BUTTON: (state) => {
    state.buttonAllIsActive = !state.buttonAllIsActive;
  },
  CHANGE_STATUS_FAVORITE_BUTTON: (state) => {
    state.buttonFavoriteIsActive = !state.buttonFavoriteIsActive;
  },
};
