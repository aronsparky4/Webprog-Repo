// ellenőrzás, hogy a szkript működik-e
console.log("Login szkript betöltve!!")

// szkript
document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("loginForm");
	const goToRegister = document.getElementById("goToRegister");

	if (goToRegister) {
		goToRegister.addEventListener("click", () => {
			window.location.href = "registration.html";
		});
	}

	if (!form) return;

	form.addEventListener("submit", (event) => {

		event.preventDefault();

		const username = document.getElementById("username").value.trim();
		const password = document.getElementById("password").value;
		if (!username || !password) {
			alert("töltsd ki az összes mezőt!");
			return;
		}

		const stored = localStorage.getItem("users");
		let users = [];
		if (stored) {
			try {
				users = JSON.parse(stored);
			} catch (e) {
				users = [];
			}
		}

		console.log("bejelentkezés próbálkozás", { username, password });
		console.log("tárolt felhasználók:", users);

		const user = users.find(u =>
			u.username === username && (u.passwd === password || u.password === password)
		);

		if (!user) {
			alert("Hibás felhasználónév vagy jelszó!");
			return;
		}

		const safeUser = { username: user.username, email: user.email };
		localStorage.setItem("currentUser", JSON.stringify(safeUser));

		alert("Sikeres bejelentkezés!");
		alert("Üdv a főoldalon! " + user.username);
		window.location.href = "homepage.html";
		});
});

