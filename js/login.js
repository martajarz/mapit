function sidebarClick() {
    var sidebar;
    var mainWidth;

    sidebar = document.getElementById("sidebar");
    mainWidth = document.getElementById("main");

    if (sidebar.className === "sidebar hidden") {
        sidebar.className = "sidebar show";
        mainWidth.style.marginRight = "350px";
    } else {
        sidebar.className = "sidebar hidden";
        mainWidth.style.marginRight = "0";
    }
};
  

// function openLoginWindow() {
//     navBar = document.getElementById("navbar");
//     navBar.className = "navbar show";
//     mainWidth = document.getElementById("main");
//     mainWidth.style.marginRight = "300px";
// }

// function closeLoginWindow() {
//     navBar = document.getElementById("navbar");
//     navBar.className = "navbar hidden";
// }