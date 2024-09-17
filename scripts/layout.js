function getPokeCardTypesTemplate(pokeType) {
  return `<div class="poke-type-icon bg-${pokeType}">
    <img class="type-icon" src="../assets/icons/${pokeType}.svg"/>
  </div>`;
}

function getPokeDetailTypesTemplate(pokeType) {
  return `<div class="poke-detail-type">
    <div class="poke-type-icon bg-${pokeType}">
      <img
        class="type-icon"
        src="../assets/icons/${pokeType}.svg"
      />
    </div>
    <p class="small-info">${pokeType}</p>
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

function getPokeDetailsTypes(types) {
  let typeRow = document.getElementById("poke-detail-types");
  for (let index = 0; index < types.length; index++) {
    const pokeType = types[index];
    typeRow.innerHTML += getPokeDetailTypesTemplate(pokeType.type.name);
  }
}

function clearPokeCards() {
  let card = document.getElementById("poke-cards");
  card.innerHTML = "";
}

function getGeneralTabTemplate(height, weight, exp, captureRate) {
  let abilities = getAbilitiesOfPokemon(pokemon.general.abilities);
  return `<table>
                <tr>
                  <td>Height</td>
                  <td>${height}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>${weight}</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>${abilities}</td>
                </tr>
                <tr>
                  <td>Base experience</td>
                  <td>${exp}</td>
                </tr>
                <tr>
                  <td>Capture rate</td>
                  <td>${captureRate}</td>
                </tr>
              </table>`;
}

function getPokeStatsTemplate() {
  return `<div class="stats-row">
                <label for="file">Name</label>
                <div class="stats-progress">
                  <p class="details">12</p>
                  <progress id="file" value=12 max="100"></progress>
                </div>
              </div>`;
}

function getSpeciesTabTemplate(
  color,
  shape,
  habitat,
  growth,
  generation,
  evolution
) {
  return `<table>
                <tr>
                  <td>Color</td>
                  <td>${color}</td>
                </tr>
                <tr>
                  <td>Shape</td>
                  <td>${shape}</td>
                </tr>
                <tr>
                  <td>Habitat</td>
                  <td>${habitat}</td>
                </tr>
                <tr>
                  <td>Growth rate</td>
                  <td>${growth}</td>
                </tr>
                <tr>
                  <td>Generation</td>
                  <td>${generation}</td>
                </tr>
                <tr>
                  <td>Evolves from</td>
                  <td>${evolution}</td>
                </tr>
              </table>`;
}

function getPokemonDetailTemplate(pokemon) {
  let abilities = getAbilitiesOfPokemon(pokemon.general.abilities);
  let index = pokemon.general.id - 1;
  return `<div class="overlay-content">
          <div class="poke-detail-container">
            <div class="poke-detail-bg bg-${pokemon.general.types[0].type.name}">
              <p class="poke-detail-id">#${pokemon.general.id}</p>
            </div>
            <div class="poke-detail-img-box">
              <img class="poke-detail-img" src="${pokemon.general.sprites.front_default}" />
            </div>
            <div class="poke-detail-info">
              <h3>${pokemon.general.name}</h3>
              <div class="poke-details-type-row" id="poke-detail-types">
              </div>
              <div class="poke-tabs">
                <div
                  class="selected-tab"
                  id="general-tab"
                  onclick="renderGeneralTabLayout(event, ${pokemon})"
                >
                  General
                </div>
                <div
                  class="default-tab"
                  id="stats-tab"
                  onclick="renderStatsTabLayout(event, ${pokemon.general.stats})"
                >
                  Stats
                </div>
                <div
                  class="default-tab"
                  id="species-tab"
                  onclick="renderSpeciesTabLayout(event, ${pokemon})"
                >
                  Species
                </div>
              </div>
              <div class="tab-content" id="tab-content">
              <table>
                <tr>
                  <td>Height</td>
                  <td>${pokemon.general.height}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>${pokemon.general.weight}</td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>${abilities}</td>
                </tr>
                <tr>
                  <td>Base experience</td>
                  <td>${pokemon.general.base_experience}</td>
                </tr>
                <tr>
                  <td>Capture rate</td>
                  <td>${pokemon.species.capture_rate}</td>
                </tr>
              </table>
              </div>
            </div>
            <div class="nav-row">
                <div class="nav-button" onclick="showPreviousPokemon(event, ${index})">
                  <img class="nav-icon" src="./assets/icons/arrow-back.svg" />
                </div>
                <div class="nav-button" onclick="showNextPokemon(event, ${index})">
                  <img class="nav-icon" src="./assets/icons/arrow-forward.svg" />
                </div>
              </div>
          </div>
      </div>`;
}
