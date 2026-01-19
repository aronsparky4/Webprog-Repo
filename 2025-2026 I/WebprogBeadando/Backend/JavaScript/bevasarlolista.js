console.log("betöltve!")
document.addEventListener("DOMContentLoaded", () => {
    const bevasarloForm = document.getElementById("bevasarloForm");
    const bevasarloLista = document.getElementById("BevasarloLista");
    function betoltBevasarlo() {
        const stored = localStorage.getItem("bevasarlo");
        let bevasarlo = [];
        if (stored) {
            try {
                bevasarlo = JSON.parse(stored);
            } catch (e) {
                bevasarlo = [];
            }
        }
        bevasarloLista.innerHTML = "";
        bevasarlo.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            const torlesGomb = document.createElement("button");
            torlesGomb.textContent = "Törlés";
            torlesGomb.addEventListener("click", () => {
                bevasarlo.splice(index, 1);
                localStorage.setItem("bevasarlo", JSON.stringify(bevasarlo));
                betoltBevasarlo();
            });
            li.appendChild(torlesGomb);
            bevasarloLista.appendChild(li);
        });
    }
    if (bevasarloForm) {
        bevasarloForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const itemInput = document.getElementById("BevasarloItem");
            const item = itemInput ? itemInput.value.trim() : "";
            if (!item) {
                alert("Az elem nem lehet üres!");
                return;
            }
            const stored = localStorage.getItem("bevasarlo");
            let bevasarlo = [];
            if (stored) {
                try {
                    bevasarlo = JSON.parse(stored);
                } catch (e) {
                    bevasarlo = [];
                }
            }
            bevasarlo.push(item);
            localStorage.setItem("bevasarlo", JSON.stringify(bevasarlo));
            if (itemInput) itemInput.value = "";
            betoltBevasarlo();
        });
    }
    betoltBevasarlo();
    document.getElementById("BevasarloLista").innerHTML = "";
});