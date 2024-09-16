function getPokeCardTypesTemplate(pokeType) {
  return `<div class="poke-type-icon bg-${pokeType}">
    <img class="type-icon" src="../assets/icons/${pokeType}.svg"/>
  </div>`;
}

function getPokemonCardTemplate(index, pokemon) {
  return `<div class="poke-container bg-${pokemon.types[0].type.name}" onclick="showPokeDetailDialog(event, ${index})">
          <div class="poke-card-bg">#${pokemon.id}</div>
            <img class="poke-img" src="${pokemon.sprites.front_default}" />
          <div class="poke-card-info">
            <h2>${pokemon.name}</h2>
            <div id="poke-type-${index}" class="poke-type-row">
            </div>
          </div>
        </div>`;
}

function renderPokemonCards() {
  let card = document.getElementById("poke-cards");
  for (let i = 0; i < pokeArray.length; i++) {
    const pokemon = pokeArray[i];
    card.innerHTML += getPokemonCardTemplate(i, pokemon);
    getPokeCardTypes(i, pokemon.types);
  }
}

function getPokeCardTypes(pokeIndex, types) {
  let typeRow = document.getElementById(`poke-type-${pokeIndex}`);
  for (let index = 0; index < types.length; index++) {
    const pokeType = types[index];
    typeRow.innerHTML += getPokeCardTypesTemplate(pokeType.type.name);
  }
}

function clearPokeCards() {
  let card = document.getElementById("poke-cards");
  card.innerHTML = "";
}

function getPokemonDetailTemplate(pokeIndex) {
  return ``;
}
