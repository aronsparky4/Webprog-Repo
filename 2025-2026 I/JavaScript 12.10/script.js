async function lelkiTaplalek() {
    try {
        let response = await fetch("https://mcitomi.hu/api/lelkitaplalek");
        let quote = await response.json();
        console.log(quote);

        if (!response.ok){
            document.getElementById("quote").innerHTML = "Hiba történt a válasz elfogadása során.";
            return;
        }
        console.log(quote);

        document.getElementById("quote").innerHTML = quote.quote;
        document.getElementById("source").innerHTML = quote.source;
    } catch(error){
        document.getElementById("quote").innerHTML = "Hiba történt a fetch hívása során";
    }
}

async function displayUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await response.json();

    console.log(users);
    for (let user of users){
        document.getElementById("users").innerHTML += `${user.name}, `;
    }
}

lelkiTaplalek();
displayUsers();