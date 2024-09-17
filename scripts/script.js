let pokeCount = 20;

async function init() {
  pokeArray = await getAllPokemons(pokeCount);
  renderPokemonCards();
}

async function loadMorePokemons() {
  pokeCount += 20;
  pokeArray = [];
  clearPokeCards();
  pokeArray = await getAllPokemons(pokeCount);
  renderPokemonCards();
}

function closePokeDetailDialog(event) {
  toggleOverlay();
  let overlay = document.getElementById("overlay-window");
  overlay.innerHTML = "";
  event.stopPropagation();
}

async function showPokeDetailDialog(event, index) {
  let pokemon = await getPokemonDetails(index + 1);
  toggleOverlay();
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

function showNextPokemon(event, index) {
  let newIndex = (index += 1);
  let overlay = document.getElementById("overlay-window");
  if (index < 1302 && index > 0) {
    overlay.innerHTML = "";
    showPokeDetailDialog(event, newIndex);
  } else {
    newIndex = 0;
    overlay.innerHTML = "";
    showPokeDetailDialog(event, newIndex);
  }
  event.stopPropagation();
}

function showPreviousPokemon(event, index) {
  let newIndex = (index -= 1);
  let overlay = document.getElementById("overlay-window");
  if (index < 1302 && index >= 0) {
    overlay.innerHTML = "";
    showPokeDetailDialog(event, newIndex);
  } else {
    newIndex = 1301;
    overlay.innerHTML = "";
    showPokeDetailDialog(event, newIndex);
  }
  event.stopPropagation();
}
