const BASE_URL = "https://pokeapi.co/api/v2/";

let pokeArray = [];
let currPokemon = {};

async function getAllPokemons(limit) {
  let currPokeArray = [];
  for (let i = 1; i <= limit; i++) {
    let response = await fetch(BASE_URL + `pokemon/${i}/`);
    let result = await response.json();
    currPokeArray.push(result);
  }
  return currPokeArray;
}

async function getPokemonDetails(id) {
  let currPokeObject = {};
  let generalResponse = await fetch(BASE_URL + `pokemon/${id}/`);
  let general = await generalResponse.json();
  currPokeObject.general = general;
  let speciesResponse = await fetch(BASE_URL + `pokemon-species/${id}/`);
  let species = await speciesResponse.json();
  currPokeObject.species = species;
  return currPokeObject;
}

async function getMorePokemons(start) {
  let morePokeArray = [];
  for (let i = start; i <= start + 19; i++) {
    let response = await fetch(BASE_URL + `pokemon/${i}/`);
    let result = await response.json();
    morePokeArray.push(result);
  }
  return morePokeArray;
}

async function getAllPokemonNames() {
  let pokeNamesArray = [];
  let pokeResponse = await fetch(BASE_URL + `pokemon/?limit=1302&offset=0`);
  let pokeResult = await pokeResponse.json();
  for (let i = 0; i < 1302; i++) {
    const name = pokeResult.results[i].name;
    pokeNamesArray.push(name);
  }
  return pokeNamesArray;
}

async function getSinglePokemon(name) {
  let pokeResponse = await fetch(BASE_URL + `pokemon/${name}/`);
  let pokeResult = pokeResponse.json();
  return pokeResult;
}
