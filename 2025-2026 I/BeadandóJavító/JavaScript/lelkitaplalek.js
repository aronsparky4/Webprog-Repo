console.log("Betöltve")

const api_forras = "https://mcitomi.hu/api/lelkitaplalek";
let quotes = [];

const quoteText = document.getElementById("idezet");
const quoteForras = document.getElementById("forras");
const quoteRequest = document.getElementById("uj-quote");
const quoteStore = document.getElementById("tarol-quote");

async function fetchQuotes() {
    quoteText.textContent = "Várjon...";
    quoteForras.textContent = "";
    quoteRequest.disabled = true;

    try {
        const response = await fetch(api_forras);
        if (!response.ok) {
            throw new Error("Hálózati hiba");
        }
        const data = await response.json();
        displayQuote(data);
    } catch (error) {
        quoteText.textContent = "Hiba történt a betöltés során.";
        console.error("Hiba:", error);
    } finally {
        quoteRequest.disabled = false;
    }
}

function displayQuote(data) {
    quoteText.textContent = `"${data.quote}"`;
    quoteForras.textContent = `- ${data.source}`;
}

quoteRequest.addEventListener("click", fetchQuotes);

fetchQuotes();

quoteStore.addEventListener("click", function() {
    const storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
    const currentQuote = { quote: quoteText.textContent, source: quoteForras.textContent };
    storedQuotes.push(currentQuote);
    localStorage.setItem("storedQuotes", JSON.stringify(storedQuotes));
    alert("Idézet elmentve!");
});

function betoltIdezetek() {
    const storedQuotes = JSON.parse(localStorage.getItem("storedQuotes")) || [];
    const idezetLista = document.getElementById("tarolt-idezetek");
    idezetLista.innerHTML = "";
    storedQuotes.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.quote} ${item.source}`;
        idezetLista.appendChild(li);
    });
}