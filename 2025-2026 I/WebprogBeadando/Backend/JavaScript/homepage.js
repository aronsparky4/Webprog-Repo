console.log("Szkript betöltve!");

document.addEventListener("DOMContentLoaded", () => {
    const logOutButton = document.getElementById("logOut");
    if (logOutButton) {
        logOutButton.addEventListener("click", () => {
            window.location.href = "login.html";
        })
    }
});