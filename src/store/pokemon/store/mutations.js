export default {
  FETCH_ALL_POKEMONS: (state, pokemons) => {
    console.log('dataPokemons antes de meter al state (Pikachu) no meter : ', pokemons);
    let pokemonsState = state.pokemons;
    pokemonsState.forEach((element) => {
      const result = pokemons.find((pokemon) => pokemon.name === element.name);
      if (!result) {
        console.log('si, se encontro al pendejo pikaxchu');
        state.pokemons = state.pokemons.concat(result);
      }
    });
    //state.pokemons = state.pokemons.concat(pokemons);
    console.log('pokemones : ', state.pokemons);
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
    console.log('SET_POKEMON; ', pokemon);
    state.pokemon = pokemon;
  },
  SET_1_POKEMON: (state, pokemon) => {
    const existPokemon = state.pokemons.find((item) => item.name === pokemon.name);
    console.log('existPokemon', existPokemon);
    if (!existPokemon) {
      state.pokemons = state.pokemons.concat(pokemon);
    }
    console.log('STATE  :', state.pokemons);
  },
  ADD_POKEMON_STATUS: (state, status) => {
    console.log('ADD_POKEMON_STATUS; ', status);
    state.pokemon.favorite = status;
  },
  CHANGE_STATUS_ALL_IS_ACTIVE_BUTTON: (state) => {
    state.buttonAllIsActive = !state.buttonAllIsActive;
  },
  CHANGE_STATUS_FAVORITE_BUTTON: (state) => {
    state.buttonFavoriteIsActive = !state.buttonFavoriteIsActive;
  },
};
