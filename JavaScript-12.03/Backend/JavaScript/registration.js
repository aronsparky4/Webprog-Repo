document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm")
    const goToLogin = document.getElementById("goToLogin")

    if(goToLogin)
    {
        goToLogin.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }
})