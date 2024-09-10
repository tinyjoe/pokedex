function getPokemonCardTemplate(pokemon) {
  return `<div class="poke-container bg-${pokemon.types[0].type.name}">
          <div class="poke-card-bg">#${pokemon.id}</div>
            <img class="poke-img" src="${pokemon.sprites.front_default}" />
          <div class="poke-card-info">
            <h2>${pokemon.name}</h2>
            <div class="poke-type-row">
              <div class="poke-type-icon"></div>
            </div>
          </div>
        </div>`;
}

function renderPokemonCards() {
  let card = document.getElementById("poke-cards");
  for (let i = 0; i < pokeArray.length; i++) {
    const pokemon = pokeArray[i];
    card.innerHTML += getPokemonCardTemplate(pokemon);
  }
}
