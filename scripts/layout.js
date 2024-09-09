function getPokemonCardTemplate(pokemon) {
  return `<div class="poke-container">
            <h2>${pokemon.title}</h2>
        </div>`;
}

function renderPokemonCards() {
  let card = document.getElementById("poke-cards");
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    card.innerHTML += getPokemonCardTemplate(pokemon);
  }
}
