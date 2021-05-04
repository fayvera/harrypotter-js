
class Option {
    constructor(option){
        this.content = option.content
        this.id = option.id
        this.houseId = option.house_id
        this.questionId = option.question_id
    }
    
}

// lives in question.js
function appendOptions(options, element){
    const ul = document.createElement("ul")
    element.append(ul)
    for (let option of options){
        let opt = document.createElement("option")
        opt.innerText = option.content
        opt.setAttribute('id', option.house_id.toString())

        opt.addEventListener("click", nextQuestion)
        ul.append(opt)
    }    
}

let currentSelection = 0;

function nextQuestion(e){
    if(!document.getElementById('next')){
    const questionDiv = document.getElementById('single-question')
    const next = document.createElement('button')
    next.id = "next"
    next.innerText = "Next"
    questionDiv.append(next)
    }
    currentSelection = e.target.id 

    next.addEventListener('click', onClick)
}

function onClick(){
    const questionDiv = document.getElementById('single-question')
    if (currentSelection === "1"){
        House.gryffindor += 1
    } else if (currentSelection === "2"){
        House.slytherin += 1
    } else if (currentSelection === "3"){
        House.ravenclaw += 1
    } else {
        House.hufflepuff +=1
    }
    questionDiv.innerHTML = ""
    const q = Question.allQuestions[Question.counter++]
    q.appendQuestion()
}

