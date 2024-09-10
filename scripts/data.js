const BASE_URL = "https://pokeapi.co/api/v2/";

let pokeArray = [];

async function getAllPokemons(limit) {
  let currPokeArray = [];
  for (let i = 1; i <= limit; i++) {
    let response = await fetch(BASE_URL + `pokemon/${i}/`);
    let result = await response.json();
    currPokeArray.push(result);
  }
  return currPokeArray;
}
