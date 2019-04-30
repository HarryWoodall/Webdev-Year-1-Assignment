let hamburgerButtonContainer = document.getElementById("menu-icon-container");
let leftMenu = document.getElementById("left-menu");
let content = document.getElementById("main-content");
let topMenu = document.getElementById("top-menu-nav");
let isTopMenuOpen = false;

function showMenu() {
  leftMenu.style.transform = "translate(0px, 0px)";
  content.style.marginLeft = "300px";
  hamburgerButtonContainer.style.display = "none";
}

function hideMenu() {
  leftMenu.style.transform = "translate(-300px, 0px)";
  content.style.marginLeft = "0px";

  window.setTimeout(() => {
    hamburgerButtonContainer.style.display = "inline";
  }, 300);
}

function toggleTopMenu() {
  if (isTopMenuOpen) {
    hideTopMenu();
  } else {
    showTopMenu();
  }
}

function showTopMenu() {
  topMenu.style.transform = "translate(0px, 0px)";
  isTopMenuOpen = true;
}

function hideTopMenu() {
  topMenu.style.transform = "translate(300px, 0)";
  isTopMenuOpen = false;
}
