export const copyPokemonToClipboard = async (pokemon) => {
  return await navigator.clipboard.writeText(pokemon);
};
