class Question{
    constructor(){

    }

}
function fetchQuestions(){
    fetch("http://localhost:3000/questions")
    .then(resp => resp.json())
    .then(appendQuestions)
}

function appendQuestions(questions){
    const questionsDiv = document.getElementById("question-container")
    for (let q of questions){
        const div = document.createElement("div")
        div.setAttribute('id', 'single-question')
        div.innerText = q.title
        questionsDiv.append(div)
        // debugger
        appendOptions(q.options, div)
    }
}