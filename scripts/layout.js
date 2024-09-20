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

function getPokemonCardTemplate(pokemon) {
  return `<div class="poke-container bg-${pokemon.types[0].type.name}" onclick="showPokeDetailDialog(event, ${pokemon.id})">
          <div class="poke-card-bg">#${pokemon.id}</div>
            <img class="poke-img" src="${pokemon.sprites.front_default}" />
          <div class="poke-card-info">
            <h2>${pokemon.name}</h2>
            <div id="poke-type-${pokemon.id}" class="poke-type-row">
            </div>
          </div>
        </div>`;
}

function renderPokemonCards() {
  let card = document.getElementById("poke-cards");
  for (let i = 0; i < pokeArray.length; i++) {
    const pokemon = pokeArray[i];
    card.innerHTML += getPokemonCardTemplate(pokemon);
    getPokeCardTypes(pokemon.id, pokemon.types);
  }
}

function getPokeCardTypes(id, types) {
  let typeRow = document.getElementById(`poke-type-${id}`);
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

function getPokemonDetailTemplate(pokemon) {
  let abilities = getAbilitiesOfPokemon(pokemon.general.abilities);
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
                <button
                  class="active"
                  id="general-tab"
                  onclick="toggleTabContent(event, 'general')"
                >
                  <div class="tab-row"><h4>General</h4><img id="general-chevron" class="tab-icon" src="./assets/icons/chevron-up.svg"/></div>
                </button>
                <div class="tab-content" id="general">
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

                <button
                  id="stats-tab"
                  onclick="toggleTabContent(event, 'stats')"
                >
                  <div class="tab-row"><h4>Stats</h4><img id="stats-chevron" class="tab-icon" src="./assets/icons/chevron-down.svg"/></div>
                </button>
                <div class="tab-content hidden" id="stats">
                <div class="stats-row">
                  <label for="file">${pokemon.general.stats[0].stat.name}</label>
                  <div class="stats-progress">
                    <p class="details">${pokemon.general.stats[0].base_stat}</p>
                    <progress id="file" value=${pokemon.general.stats[0].base_stat} max="100"></progress>
                  </div>
                </div>
                <div class="stats-row">
                  <label for="file">${pokemon.general.stats[1].stat.name}</label>
                  <div class="stats-progress">
                    <p class="details">${pokemon.general.stats[1].base_stat}</p>
                    <progress id="file" value=${pokemon.general.stats[1].base_stat} max="100"></progress>
                  </div>
                </div>
                <div class="stats-row">
                  <label for="file">${pokemon.general.stats[2].stat.name}</label>
                  <div class="stats-progress">
                    <p class="details">${pokemon.general.stats[2].base_stat}</p>
                    <progress id="file" value=${pokemon.general.stats[2].base_stat} max="100"></progress>
                  </div>
                </div>
                <div class="stats-row">
                  <label for="file">${pokemon.general.stats[3].stat.name}</label>
                  <div class="stats-progress">
                    <p class="details">${pokemon.general.stats[3].base_stat}</p>
                    <progress id="file" value=${pokemon.general.stats[3].base_stat} max="100"></progress>
                  </div>
                </div>
                <div class="stats-row">
                  <label for="file">${pokemon.general.stats[4].stat.name}</label>
                  <div class="stats-progress">
                    <p class="details">${pokemon.general.stats[4].base_stat}</p>
                    <progress id="file" value=${pokemon.general.stats[4].base_stat} max="100"></progress>
                  </div>
                </div>
                <div class="stats-row">
                  <label for="file">${pokemon.general.stats[5].stat.name}</label>
                  <div class="stats-progress">
                    <p class="details">${pokemon.general.stats[5].base_stat}</p>
                    <progress id="file" value=${pokemon.general.stats[5].base_stat} max="100"></progress>
                  </div>
                </div>
              </div>

                <button
                  id="species-tab"
                  onclick="toggleTabContent(event, 'species')"
                >
                  <div class="tab-row"><h4>Species</h4><img id="species-chevron" class="tab-icon" src="./assets/icons/chevron-down.svg"/></div>
                </button>
              <div class="tab-content hidden" id="species">
                <table>
                <tr>
                  <td>Color</td>
                  <td>${pokemon.species.color.name}</td>
                </tr>
                <tr>
                  <td>Shape</td>
                  <td>${pokemon.species.shape.name}</td>
                </tr>
                <tr>
                  <td>Habitat</td>
                  <td>${pokemon.species.habitat.name}</td>
                </tr>
                <tr>
                  <td>Growth rate</td>
                  <td>${pokemon.species.growth_rate.name}</td>
                </tr>
                <tr>
                  <td>Generation</td>
                  <td>${pokemon.species.generation.name}</td>
                </tr>
              </table>
            </div>
            </div>
            </div>

            <div class="nav-row">
                <button class="nav-button" onclick="showPreviousPokemon(event, ${pokemon.general.id})">
                  <img class="nav-icon" src="./assets/icons/arrow-back.svg" />
                </button>
                <button class="nav-button" onclick="showNextPokemon(event, ${pokemon.general.id})">
                  <img class="nav-icon" src="./assets/icons/arrow-forward.svg" />
                </button>
              </div>
          </div>
      </div>`;
}
