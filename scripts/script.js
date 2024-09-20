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

async function showPokeDetailDialog(event, id) {
  showOrHideLoader();
  let pokemon = await getPokemonDetails(id);
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
  toggleTabChevron(tabName);
  event.stopPropagation();
}

function toggleTabChevron(tabName) {
  let tabIcon = document.getElementById(`${tabName}-chevron`);
  if (tabIcon.src.endsWith("down.svg")) {
    tabIcon.src = "./assets/icons/chevron-up.svg";
  } else {
    tabIcon.src = "./assets/icons/chevron-down.svg";
  }
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

function searchForPokemons() {
  let searchValue = document.getElementById("searchPokemons").value;
  let card = document.getElementById("poke-cards");
  card.innerHTML = "";
  if (searchValue.length >= 3) {
    renderSearchResults(searchValue);
  } else {
    alert("The search expression must be at least 3 letters long.");
  }
  searchValue = " ";
}

async function renderSearchResults(value) {
  let searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  hideResetButton();
  showOrHideLoader();
  pokeArray = await searchInPokemons(value);
  if (pokeArray.length != 0) {
    showOrHideLoader();
    renderSuccessfulSearchString(searchResult);
    renderPokemonCards();
  } else {
    showOrHideLoader();
    searchResult.classList.remove("hidden");
  }
}

function hideResetButton() {
  let resetBtn = document.getElementById("reset-button");
  let moreBtn = document.getElementById("more-button");
  resetBtn.classList.add("hidden");
  moreBtn.classList.remove("hidden");
}

function renderSuccessfulSearchString(result) {
  let btn = document.getElementById("more-button");
  let resetBtn = document.getElementById("reset-button");
  result.innerHTML = "";
  result.classList.remove("hidden");
  result.innerHTML = "These Pokemons could be found:";
  btn.classList.add("hidden");
  resetBtn.classList.remove("hidden");
}

async function searchInPokemons(value) {
  let pokemons = await getAllPokemons(1000);
  let searchResult = [];
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    if (pokemon.name.includes(value)) {
      searchResult.push(pokemon);
    }
  }
  return searchResult;
}

async function resetSearchResult() {
  resetButtonsAndText();
  showOrHideLoader();
  clearPokeCards();
  pokeArray = await getAllPokemons(20);
  renderPokemonCards();
  showOrHideLoader();
}

function resetButtonsAndText() {
  let moreBtn = document.getElementById("more-button");
  let resetBtn = document.getElementById("reset-button");
  let searchResult = document.getElementById("search-result");
  moreBtn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  searchResult.classList.add("hidden");
}
