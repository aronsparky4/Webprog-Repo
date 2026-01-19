console.log("Betöltve!")

// Gondoltam egy számra
document.addEventListener("DOMContentLoaded", () => {
    const gondoltSzam = Math.floor(Math.random() * 100) + 1;
    console.log("Gondolt szám (debug miatt):", gondoltSzam);
    window.valaszCsekk = function() {
        const felhasznaloValasz = parseInt(document.getElementById("felhasznaloValasz").value);
        if (felhasznaloValasz === gondoltSzam) {
            alert("Helyes a szám");
        } else if (felhasznaloValasz < gondoltSzam) {
            alert("Több...");
        } else if(felhasznaloValasz > 100){
            alert("Túl sok! 1 és 100 között tippelj!");
        } 
        else {
            alert("Kevesebb...");
        }
    };
});

// Kő-papír-olló
document.addEventListener("DOMContentLoaded", () => {
    const valaszok = ["Kő", "Papír", "Olló"];
    window.jatekInditas = function() {
        const jatekosValasz = document.getElementById("jatekValasz").value;
        const gepValasz = valaszok[Math.floor(Math.random() * valaszok.length)].toLowerCase();
        let eredmeny = "";

        if (jatekosValasz === gepValasz) {
            eredmeny = "Döntetlen!";
        } 
        else if ((jatekosValasz === "kő" && gepValasz === "olló") || (jatekosValasz === "papír" && gepValasz === "kő") || (jatekosValasz === "olló" && gepValasz === "papír")) {
            eredmeny = "Nyertél!";
        } else {
            eredmeny = "Vesztettél!";
        }
        document.getElementById("valasz").innerHTML = `Gép választása: ${gepValasz.charAt(0).toUpperCase() + gepValasz.slice(1)}. Eredmény: ${eredmeny}`;
    };
});