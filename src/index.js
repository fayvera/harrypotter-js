// fetchQuestion()
const quizContainer = document.getElementById("quiz-container")
const buttonQuiz = document.getElementById("start-quiz")
const backgroundImg = document.body.style.backgroundImage = "logo/forest.jpeg";


buttonQuiz.addEventListener("click", Question.fetchQuestions)
