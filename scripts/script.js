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
  let overlay = document.getElementById("overlay-window");
  overlay.classList.add("hidden");
  overlay.innerHTML = "";
  event.stopPropagation();
}

function showPokeDetailDialog(event, index) {
  let overlay = document.getElementById("overlay-window");
  overlay.classList.remove("hidden");
  event.stopPropagation();
}
