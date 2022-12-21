import * as Functions from "./modules/functions.js";

const d = document;
const navigationButton = d.querySelector(".burger");
Functions.isWebp();

function toogleNavigation() {
  const navigation = document.querySelector(".header__navigation");
  navigation.classList.toggle("header__navigation_active");
  navigationButton.classList.toggle("burger_active");
}

navigationButton.addEventListener("click", toogleNavigation, false);
