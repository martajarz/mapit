var loginWindow

function openLoginWindow() {
    loginWindow = document.getElementById("login_window");
    loginWindow.className = "login_window show";
}

function closeLoginWindow() {
    loginWindow = document.getElementById("login_window");
    loginWindow.className = "login_window hidden";
}