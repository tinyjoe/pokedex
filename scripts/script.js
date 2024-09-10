async function init() {
  pokeArray = await getAllPokemons(20);
  console.log(pokeArray);
  renderPokemonCards();
}
