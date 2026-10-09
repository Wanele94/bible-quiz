const questions = [
    {
        question: "Who built the ark?",
        answers: [
            { text: "Abraham", correct: false },
            { text: "Moses", correct: false },
            { text: "Noah", correct: true },
            { text: "David", correct: false }
        ]
    },

    {
        question: "Who was thrown into the lions' den?",
        answers: [
            { text: "Daniel", correct: true },
            { text: "Joseph", correct: false },
            { text: "Elijah", correct: false },
            { text: "Samuel", correct: false }
        ]
    },

    {
        question: "Who led the Israelites out of Egypt?",
        answers: [
            { text: "Joshua", correct: false },
            { text: "Moses", correct: true },
            { text: "Aaron", correct: false },
            { text: "David", correct: false }
        ]
    },

    {
        question: "Who defeated Goliath?",
        answers: [
            { text: "Saul", correct: false },
            { text: "Jonathan", correct: false },
            { text: "David", correct: true },
            { text: "Solomon", correct: false }
        ]
    },

    {
        question: "Who was the mother of Jesus?",
        answers: [
            { text: "Martha", correct: false },
            { text: "Mary", correct: true },
            { text: "Elizabeth", correct: false },
            { text: "Ruth", correct: false }
        ]
    },

    {
        question: "How many disciples did Jesus choose?",
        answers: [
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "40", correct: false }
        ]
    },

    {
        question: "Who betrayed Jesus?",
        answers: [
            { text: "Peter", correct: false },
            { text: "Judas Iscariot", correct: true },
            { text: "Thomas", correct: false },
            { text: "Matthew", correct: false }
        ]
    },

    {
        question: "Who denied Jesus three times?",
        answers: [
            { text: "Peter", correct: true },
            { text: "John", correct: false },
            { text: "James", correct: false },
            { text: "Andrew", correct: false }
        ]
    },

    {
        question: "Who was known as the strongest man in the Bible?",
        answers: [
            { text: "Samson", correct: true },
            { text: "Goliath", correct: false },
            { text: "Saul", correct: false },
            { text: "David", correct: false }
        ]
    },

    {
        question: "Who was swallowed by a great fish?",
        answers: [
            { text: "Jonah", correct: true },
            { text: "Elijah", correct: false },
            { text: "Jeremiah", correct: false },
            { text: "Isaiah", correct: false }
        ]
    },

    {
        question: "Who was the oldest man in the Bible?",
        answers: [
            { text: "Adam", correct: false },
            { text: "Methuselah", correct: true },
            { text: "Noah", correct: false },
            { text: "Seth", correct: false }
        ]
    },

    {
        question: "Who was the wife of Isaac?",
        answers: [
            { text: "Sarah", correct: false },
            { text: "Eve", correct: false },
            { text: "Rachel", correct: false },
            { text: "Rebecca", correct: true }
        ]
    },

    {
        question: "Who was known as the father of many nations?",
        answers: [
            { text: "Isaac", correct: false },
            { text: "Jacob", correct: false },
            { text: "Abraham", correct: true },
            { text: "Joseph", correct: false }
        ]
    },

    {
        question: "Who interpreted Pharaoh's dreams in Egypt?",
        answers: [
            { text: "Joseph", correct: true },
            { text: "Daniel", correct: false },
            { text: "Moses", correct: false },
            { text: "Aaron", correct: false }
        ]
    },

    {
        question: "Who was thrown into the fiery furnace?",
        answers: [
            { text: "Daniel", correct: false },
            { text: "David and Jonathan", correct: false },
            { text: "Shadrach, Meshach and Abednego", correct: true },
            { text: "Moses and Aaron", correct: false }
        ]
    },

    {
        question: "What did Jesus turn water into?",
        answers: [
            { text: "Oil", correct: false },
            { text: "Milk", correct: false },
            { text: "Wine", correct: true },
            { text: "Honey", correct: false }
        ]
    },

    {
        question: "Who baptized Jesus?",
        answers: [
            { text: "Peter", correct: false },
            { text: "John the Baptist", correct: true },
            { text: "Paul", correct: false },
            { text: "James", correct: false }
        ]
    },

    {
        question: "What is the first book of the Bible?",
        answers: [
            { text: "Exodus", correct: false },
            { text: "Matthew", correct: false },
            { text: "Genesis", correct: true },
            { text: "Psalms", correct: false }
        ]
    },

    {
        question: "What is the last book of the Bible?",
        answers: [
            { text: "Jude", correct: false },
            { text: "Revelation", correct: true },
            { text: "Acts", correct: false },
            { text: "Malachi", correct: false }
        ]
    },

    {
        question: "Which disciple doubted that Jesus had risen until he saw Him?",
        answers: [
            { text: "Thomas", correct: true },
            { text: "Peter", correct: false },
            { text: "John", correct: false },
            { text: "Matthew", correct: false }
        ]
    }
];
const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-btn");
const questionNumber = document.querySelector(".question-number");

let currentQuestionIndex = 0;
let score = 0;
let quizFinished = false;

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizFinished = false;

    shuffleQuestions();
    showQuestion();
}

function showQuestion() {
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;

    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    answerButtons.innerHTML = "";

    const percentage = Math.round(
        (score / questions.length) * 100
           
    );
     let message;
     let encouragement;

        if (percentage >= 90) {
        message = "Bible Scholar! 🏆";
        encouragement = "Excellent! Your knowledge of God's Word is impressive!";
    } else if (percentage >= 70) {
        message = "Well Done! 🌟";
        encouragement = "Keep growing in your knowledge of Scripture!";
    } else if (percentage >= 50) {
        message = "Good Effort! 📖";
        encouragement = "Keep studying and growing in the Word!";
    } else if (percentage >= 40) {
        message = "Keep Going! 🌱";
        encouragement = "Every question is an opportunity to learn more about God's Word.";
    }
       
    questionNumber.textContent = "Quiz Complete 🎉";

    questionElement.innerHTML = `
        <div class="score-screen">
            <div class="trophy">🏆</div>

            <h2>${message}</h2>

            <p class="score-text">
                You scored
            </p>

            <div class="score-number">
                ${score}/${questions.length}
            </div>

            <div class="percentage">
                ${percentage}%
            </div>

            <p class="encouragement">
                 ${encouragement}
            </p>
        </div>
    `;

    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";

    quizFinished = true;
}

nextButton.addEventListener("click", () => {

    if (quizFinished) {
        startQuiz();
        nextButton.textContent = "Next Question";
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

startQuiz();