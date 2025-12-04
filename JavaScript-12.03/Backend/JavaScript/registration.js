document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm")
    const goToLogin = document.getElementById("goToLogin")

    if(goToLogin)
    {
        goToLogin.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }
    if (!form) return
    
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

        const stored = localStorage.getItem("users")
        let users = []
        if(stored)
        {
            try{
                users = JSON.parse(stored)
            }
            catch(e)
            {
                users = []
            }
        }

        const exists = users.some(u => u.username === username)
        if(exists)
        {
            alert("ez a felhasználó név már foglalt!")
            return
        }
        users.push({username, email, passwd})
        localStorage.setItem("users", JSON.stringify(users))
        alert("Sikeres volt a regisztráció")
        window.location.href = "login.html"
    })
})