document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm")
    const goToLogin = document.getElementById("goToLogin")

    if(goToLogin)
    {
        goToLogin.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }
    if (!form)
    {
        return
    }
    form.addEventListener("submit", (event) =>{
        event.preventDefault()

        const username = document.getElementById("username").value
        const email = document.getElementById("email").value
        const passwd = document.getElementById("passwd").value

        if(!username || !email || !passwd)
        {
            alert("Töltsd ki az összes mezőt!")
            return
        }
    })
})