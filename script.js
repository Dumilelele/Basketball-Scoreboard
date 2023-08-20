let countHome = 0;
let countGuest = 0;
let homeEl, guestEl, homeContainerEl, guestContainerEl;

document.addEventListener("DOMContentLoaded", function () {
  homeEl = document.getElementById("home-score-el");
  guestEl = document.getElementById("guest-score-el");
  homeContainerEl = document.getElementById("home-container-el");
  guestContainerEl = document.querySelector(".guest"); // Get the guest container
});

function homeAdd1Point() {
  countHome += 1;
  homeEl.textContent = countHome;
  updateContainerColors();
}

function homeAdd2Points() {
  countHome += 2;
  homeEl.textContent = countHome;
  updateContainerColors();
}

function homeAdd3Points() {
  countHome += 3;
  homeEl.textContent = countHome;
  updateContainerColors();
}

function guestAdd1Point() {
  countGuest += 1;
  guestEl.textContent = countGuest;
  updateContainerColors();
}

function guestAdd2Points() {
  countGuest += 2;
  guestEl.textContent = countGuest;
  updateContainerColors();
}

function guestAdd3Points() {
  countGuest += 3;
  guestEl.textContent = countGuest;
  updateContainerColors();
}

function restart() {
  countGuest = 0;
  countHome = 0;
  guestEl.textContent = 0;
  homeEl.textContent = 0;
  homeContainerEl.style.backgroundColor = "#8f0e2f";
  guestContainerEl.style.backgroundColor = "#8f0e2f";
}

function updateContainerColors() {
  if (countHome > countGuest) {
    homeContainerEl.style.backgroundColor = "#d61445"; // Change to the desired color
    guestContainerEl.style.backgroundColor = "#8f0e2f"; // Change to the default color
  } else if (countGuest > countHome) {
    homeContainerEl.style.backgroundColor = "#8f0e2f"; // Change to the default color
    guestContainerEl.style.backgroundColor = "#d61445"; // Change to the desired color
  } else {
    // Both scores are equal
    homeContainerEl.style.backgroundColor = "#8f0e2f"; // Change to the default color
    guestContainerEl.style.backgroundColor = "#8f0e2f"; // Change to the default color
  }
}
