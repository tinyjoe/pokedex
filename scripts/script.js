let pokeCount = 20;

async function init() {
  showOrHideLoader();
  pokeArray = await getAllPokemons(20);
  showOrHideLoader();
  renderPokemonCards();
}

function showOrHideLoader() {
  let loading = document.getElementById("loader");
  let moreBtn = document.getElementById("more-button");
  loading.classList.toggle("hidden");
  moreBtn.classList.toggle("hidden");
}

async function loadMorePokemons() {
  showOrHideLoader();
  pokeCount += 20;
  clearPokeCards();
  pokeArray = await getAllPokemons(pokeCount);
  showOrHideLoader();
  renderPokemonCards();
}

function closePokeDetailDialog(event) {
  toggleOverlay();
  let overlay = document.getElementById("overlay-window");
  overlay.innerHTML = "";
  event.stopPropagation();
}

async function showPokeDetailDialog(event, index) {
  showOrHideLoader();
  let pokemon = await getPokemonDetails(index + 1);
  showOrHideLoader();
  toggleOverlay();
  let overlay = document.getElementById("overlay-window");
  overlay.innerHTML = "";
  overlay.innerHTML += getPokemonDetailTemplate(pokemon);
  getPokeDetailsTypes(pokemon.general.types);
  event.stopPropagation();
}

async function nextPokeDetailDialog(event, index) {
  let pokemon = await getPokemonDetails(index + 1);
  let overlay = document.getElementById("overlay-window");
  overlay.innerHTML = "";
  overlay.innerHTML += getPokemonDetailTemplate(pokemon);
  getPokeDetailsTypes(pokemon.general.types);
  event.stopPropagation();
}

async function previousPokeDetailDialog(event, index) {
  let pokemon = await getPokemonDetails(index);
  let overlay = document.getElementById("overlay-window");
  overlay.innerHTML = "";
  overlay.innerHTML += getPokemonDetailTemplate(pokemon);
  getPokeDetailsTypes(pokemon.general.types);
  event.stopPropagation();
}

function toggleOverlay() {
  let overlay = document.getElementById("overlay-window");
  let content = document.getElementById("main-content");
  overlay.classList.toggle("hidden");
  content.classList.toggle("no-scroll");
}

function getAbilitiesOfPokemon(abilitiesArray) {
  let abilities = "";
  for (let i = 0; i < abilitiesArray.length; i++) {
    const name = abilitiesArray[i].ability.name;
    abilities += name + " | ";
  }
  return abilities;
}

function toggleTabContent(event, tabName) {
  let tabContent = document.getElementById(tabName);
  let tabButton = document.getElementById(`${tabName}-tab`);
  tabContent.classList.toggle("hidden");
  tabButton.classList.toggle("active");
  event.stopPropagation();
}

function showNextPokemon(event, id) {
  let index = id - 1;
  let overlay = document.getElementById("overlay-window");
  if (index < 1302 && index >= 0) {
    overlay.innerHTML = "";
    nextPokeDetailDialog(event, id);
  } else {
    closePokeDetailDialog(event);
  }
  event.stopPropagation();
}

function showPreviousPokemon(event, id) {
  let newId = id - 1;
  let overlay = document.getElementById("overlay-window");
  if (newId < 1302 && newId > 0) {
    overlay.innerHTML = "";
    previousPokeDetailDialog(event, newId);
  } else {
    closePokeDetailDialog(event);
  }
  event.stopPropagation();
}

async function searchForPokemons() {
  let searchValue = document.getElementById("searchPokemons").value;
  let card = document.getElementById("poke-cards");
  if (searchValue.length >= 3) {
    card.innerHTML = "";
    showOrHideLoader();
    pokeArray = await searchInPokemons(searchValue);
    showOrHideLoader();
    renderPokemonCards();
  } else {
    alert("The search expression must be at least 3 characters long");
  }
}

async function searchInPokemons(value) {
  let pokemons = await getAllPokemons(50);
  let searchResult = [];
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    if (pokemon.name.search(value)) {
      searchResult.push(pokemon);
    }
  }
  return searchResult;
}
