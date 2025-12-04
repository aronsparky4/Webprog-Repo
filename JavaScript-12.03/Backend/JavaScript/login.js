document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("registrationForm")
    const goToRegistration = document.getElementById("goToRegistration")

    if(goToRegistration)
    {
        goToRegistration.addEventListener("click", () =>{
            window.location.href = "registration.html"
        })
    }

    if(!form) return
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        const username = document.getElementById("username").value
        const passwd = document.getAnimations("passwd").value

        if(!username || !passwd){
            alert("tölsd ki az összes mezőt!")
            return
        }

        const stored = localStorage.getItem("users")
        let users = []
        if(stored){
            try{
                users = JSON.parse(stored)
            }catch(e){
                users = []
            }
        }

        const user = users.find(u => u.username === username && u.passwd === passwd)
        if(!user){
            alert("Helytelen felhasználó név vagy jelszó")
            return
        }
        
        alert("Bejelentkezés sikeres!")
    })
})