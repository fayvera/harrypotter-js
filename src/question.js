class Question{
    constructor(){

    }

}
let allQuestions = []
const questionsDiv = document.getElementById("question-container")

function fetchQuestions(){
    fetch("http://localhost:3000/questions")
    .then(resp => resp.json())
    .then(appendQuestions)
}

function appendQuestions(questions){
    allQuestions = questions
    // let currentQuestion = allQuestions
    let counter = 0
    const q = allQuestions[counter++]
        
        const div = document.createElement("div")
        div.setAttribute('id', 'single-question')
        div.innerText = q.title
        questionsDiv.append(div)
        appendOptions(q.options, div)
}