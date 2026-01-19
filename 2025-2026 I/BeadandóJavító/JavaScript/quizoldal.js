console.log("Szkirpt Betöltve")

const quizAnswers = [
    {
        question: "Melyik évben jelent meg a JavaScript?",
        correctAnswer: "1996"
    },
    {
        question: "Milyen programot használunk HTML/CSS valamint JS fájlok készítésére?",
        correctAnswers: ["JetBrains WebStorm", "VS Code"]
    },
    {
        question: "Melyik kulcsszóval hozunk létre egy egyenletet JavaScriptben?",
        correctAnswer: "let"
    },
    {
        question: "Mit csinál a \"===\" operátor",
        correctAnswer: "Összehasonlít értéket és típust is"
    }
];

document.querySelectorAll('.answer-button').forEach(button => {
    button.addEventListener('click', function() {
        const isCorrect = this.getAttribute('data-correct') === 'true';
        
        if (isCorrect) {
            this.style.backgroundColor = '#4CAF50'; // Zöld - helyes
            updateScore(1);
        } else {
            this.style.backgroundColor = '#f44336'; // Piros - helytelen
        }
        
        this.disabled = true;
    });
});

let score = 0;
function updateScore(points) {
    score += points;
    document.getElementById('score-display').innerHTML = `Pontszám: ${score}`;
}

function restartQuiz() {
    score = 0;
    document.getElementById('score-display').innerHTML = `Pontszám: ${score}`;
    document.querySelectorAll('.answer-button').forEach(button => {
        button.style.backgroundColor = '';
        button.disabled = false;
    });
}