import { getPokemons, getPokemon } from '../../../services/pokemon/pokemon.service';
export default {
  fetchAllPokemons: async ({ dispatch, commit, state }, currentPage) => {
    try {
      const data = await getPokemons(currentPage);
      commit('FETCH_ALL_POKEMONS', data);
    } catch (error) {
      console.log(error);
    }
  },
  fetchPokemonByName: async ({ commit, state }, name) => {
    try {
      let data = await getPokemon(name);
      let pokemons = state.pokemons;
      pokemons.forEach((element) => {
        if (element.name === name) {
          data.favorite = element.favorite;
        }
      });
      commit('SET_POKEMON', data);
    } catch (error) {
      console.log(error);
    }
  },
  addOnePokemon: async ({ commit, state }, name) => {
    try {
      let data = await getPokemon(name);
      if (data) {
        let newPokemonArray = [];
        let newPokemonObj = {};
        newPokemonObj.favorite = false;
        newPokemonObj.url = data.url;
        newPokemonObj.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        newPokemonArray.push(newPokemonObj);
        commit('SET_1_POKEMON', newPokemonArray);
        commit('SET_FILTERED_POKEMONS', newPokemonArray);
      }
    } catch (error) {
      console.log(error);
    }
  },
  clearFilteredPokemons: ({ commit }) => {
    commit('SET_FILTERED_POKEMONS', []);
  },
  cleanDetailModal: ({ commit }) => {
    commit('SET_POKEMON', {});
  },
  filteredPokemonByName: async ({ commit, state, dispatch }, pokemonName) => {
    const filteredPokemons = state.pokemons.filter((item) => item.name.toLowerCase().indexOf(pokemonName.toLowerCase()) > -1);
    if (!filteredPokemons.length) {
      dispatch('addOnePokemon', pokemonName);
    } else {
      commit('SET_FILTERED_POKEMONS', filteredPokemons);
    }
  },
  showAllPokemonsByDefault: ({ commit }, canShowAllPokemons) => {
    commit('SHOW_ALL_POKEMONS_BY_DEFAULT', canShowAllPokemons);
  },
  changeStatusFavoritePokemon: async ({ state, commit }, name) => {
    let pokemons = state.pokemons;
    const index = pokemons.findIndex((element) => element.name === name);
    pokemons[index].favorite = !pokemons[index].favorite;
    commit('SET_POKEMONS', pokemons);
  },
  changeStatusAllIsActiveButton: ({ commit }) => {
    commit('CHANGE_STATUS_ALL_IS_ACTIVE_BUTTON');
  },
  changeStatusFavoriteButton: ({ commit }) => {
    commit('CHANGE_STATUS_FAVORITE_BUTTON');
  },
};
