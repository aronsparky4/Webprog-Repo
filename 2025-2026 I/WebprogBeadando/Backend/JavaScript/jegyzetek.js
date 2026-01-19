console.log("szkript betöltve!!");

document.addEventListener("DOMContentLoaded", () => {
    const jegyzetForm = document.getElementById("noteForm");
    const jegyzetLista = document.getElementById("JegyzetLista");

    function betoltJegyzetek() {
        const stored = localStorage.getItem("jegyzetek");
        let jegyzetek = [];
        if (stored) {
            try {
                jegyzetek = JSON.parse(stored);
            } catch (e) {
                jegyzetek = [];
            }
        }
        jegyzetLista.innerHTML = "";
        jegyzetek.forEach((jegyzet, index) => {
            const li = document.createElement("li");
            li.textContent = jegyzet;
            const torlesGomb = document.createElement("button");
            torlesGomb.textContent = "Törlés";
            torlesGomb.addEventListener("click", () => {
                jegyzetek.splice(index, 1);
                localStorage.setItem("jegyzetek", JSON.stringify(jegyzetek));
                betoltJegyzetek();
            });
            li.appendChild(torlesGomb);
            jegyzetLista.appendChild(li);
        });
    }
    if (jegyzetForm) {
        jegyzetForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const titleInput = document.getElementById("JegyzetCim");
            const contentInput = document.getElementById("JegyzetTartalom");
            const title = titleInput ? titleInput.value.trim() : "";
            const content = contentInput ? contentInput.value.trim() : "";
            if (!title && !content) {
                alert("A jegyzet nem lehet üres!");
                return;
            }
            const stored = localStorage.getItem("jegyzetek");
            let jegyzetek = [];
            if (stored) {
                try {
                    jegyzetek = JSON.parse(stored);
                } catch (e) {
                    jegyzetek = [];
                }
            }
            const note = title && content ? `${title}: ${content}` : (title || content);
            jegyzetek.push(note);
            localStorage.setItem("jegyzetek", JSON.stringify(jegyzetek));
            if (titleInput) titleInput.value = "";
            if (contentInput) contentInput.value = "";
            betoltJegyzetek();
        });
    }
    betoltJegyzetek();
});