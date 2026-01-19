console.log("Szkript betöltve!")

const STORAGE_KEY = "todo-lista";
let todos = [];

loadTodos();
renderTodos();

function loadTodos() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        todos = JSON.parse(saved);
    }
}

function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function todoHozzaadas() {
    const text = document.getElementById("todoBeker").value;
    const priority = parseInt(document.getElementById("fontossagi").value);

    if (text.trim() === "") return;

    todos.push({
        id: Date.now(),
        text,
        priority,
        done: false
    });

    document.getElementById("todoBeker").value = "";
    saveTodos();
    renderTodos();
}

function toggleDone(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    saveTodos();
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById("todoLista");
    list.innerHTML = "";

    const sortedTodos = [...todos].sort((a, b) => b.priority - a.priority);

    sortedTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `priority-${todo.priority} ${todo.done ? "done" : ""}`;

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.onclick = () => toggleDone(todo.id);

        const TorlesGomb = document.createElement("button");
        TorlesGomb.textContent = "X";
        TorlesGomb.className = "delete";
        TorlesGomb.onclick = () => deleteTodo(todo.id);

        li.appendChild(span);
        li.appendChild(TorlesGomb);
        list.appendChild(li);
    });
}
