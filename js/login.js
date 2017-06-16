var navBar;
var mainWidth;

function openLoginWindow() {
    navBar = document.getElementById("navbar");
    navBar.className = "navbar show";
    mainWidth = document.getElementById("main");
    mainWidth.style.marginRight = "300px";
}

function closeLoginWindow() {
    navBar = document.getElementById("navbar");
    navBar.className = "navbar hidden";
}