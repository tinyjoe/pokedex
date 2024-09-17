const BASE_URL = "https://pokeapi.co/api/v2/";

let pokeArray = [];
let currPokemon = {};

let tabArray = [
  {
    active: "general",
    inactive1: "stats",
    inactive2: "species",
  },
  {
    active: "stats",
    inactive1: "general",
    inactive2: "species",
  },
  {
    active: "species",
    inactive1: "stats",
    inactive2: "general",
  },
];

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
