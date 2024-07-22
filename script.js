const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: "Harper Lee"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.textContent = questions[currentQuestionIndex].question;
    choicesElement.innerHTML = '';

    questions[currentQuestionIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = choice;
        button.onclick = () => selectChoice(choice);
        choicesElement.appendChild(button);
    });
}

function selectChoice(choice) {
    const resultElement = document.getElementById('result');
    if (choice === questions[currentQuestionIndex].answer) {
        score++;
        resultElement.textContent = 'Correct!';
    } else {
        resultElement.textContent = 'Wrong!';
    }
    document.getElementById('submit').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').textContent = '';
        document.getElementById('submit').disabled = true;
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const quizElement = document.getElementById('quiz');
    quizElement.innerHTML = `
        <h1>Quiz Completed</h1>
        <p>Your score is ${score} out of ${questions.length}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    document.getElementById('submit').disabled = true;
});
