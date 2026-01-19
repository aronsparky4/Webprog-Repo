console.log("betöltve")

const editBtn = document.getElementById("editBtn");
let isEditing = false;
editBtn.addEventListener("click", function() {
    const contentBoxes = document.querySelectorAll(".box h1, .box h2, .box h3, .box p");
    if (!isEditing) {
        contentBoxes.forEach(box => {
            box.setAttribute("contenteditable", "true");
            box.style.border = "2px dashed orange";
        });
        editBtn.textContent = "Mentés";
        isEditing = true;
    } else {
        contentBoxes.forEach(box => {
            box.removeAttribute("contenteditable");
            box.style.border = "none";
        });
        editBtn.textContent = "Szerkesztés";
        isEditing = false;
    }
});