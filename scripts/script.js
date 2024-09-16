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

function showPokeDetailDialog(event, index) {
  toggleOverlay();
  event.stopPropagation();
}

function toggleOverlay() {
  let overlay = document.getElementById("overlay-window");
  let content = document.getElementById("main-content");
  overlay.classList.toggle("hidden");
  content.classList.toggle("no-scroll");
}
