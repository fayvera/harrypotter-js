
fetch("http://localhost:3000/questions")
.then(resp => resp.json())
.then(resp => console.log(resp))



const startQuiz = document.getElementById("start-quiz")
const quizContainer = document.getElementById("quiz-container")


