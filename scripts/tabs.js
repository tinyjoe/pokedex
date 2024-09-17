function tabIsActive(tab) {
  let activeTab = document.getElementById(`${tab.active}-tab`);
  let inactiveTab1 = document.getElementById(`${tab.inactive1}-tab`);
  let inactiveTab2 = document.getElementById(`${tab.inactive2}-tab`);
  activeTab.classList.remove("default-tab");
  activeTab.classList.add("selected-tab");
  inactiveTab1.classList.remove("selected-tab");
  inactiveTab1.classList.add("default-tab");
  inactiveTab2.classList.remove("selected-tab");
  inactiveTab2.classList.add("default-tab");
}

function renderGeneralTabLayout(event, pokemon) {
  let tabContent = document.getElementById("tab-content");
  tabIsActive(tabArray[0]);
  tabContent.innerHTML = "";
  tabContent.innerHTML += getGeneralTabTemplate(
    pokemon.general.height,
    pokemon.general.weight,
    pokemon.general.base_experience,
    pokemon.species.capture_rate
  );
  event.stopPropagation();
}

function renderStatsTabLayout(event) {
  let tabContent = document.getElementById("tab-content");
  tabIsActive(tabArray[1]);
  tabContent.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const statItem = stats[i];
    tabContent.innerHTML += getPokeStatsTemplate();
  }
  event.stopPropagation();
}

function renderSpeciesTabLayout(event, pokemon) {
  let tabContent = document.getElementById("tab-content");
  tabIsActive(tabArray[2]);
  tabContent.innerHTML = "";
  tabContent.innerHTML += getSpeciesTabTemplate(pokemon);
  event.stopPropagation();
}
