const questionsDiv = document.getElementById("question-container")

class Question{
    constructor(question){
        Question.allQuestions.push(this)
        this.title = question.title
        this.id = question.id
        debugger
        this.options = question.options.map(o => new Option(o))
        
    }
    static allQuestions = []
    static counter = 0;
    static createQuestions(questions){
        for (let q of questions){
            new Question(q) 
        }
        const q = Question.allQuestions[Question.counter++]
        q.appendQuestion()
    }

    appendQuestion(){
        const div = document.createElement("div")
        div.setAttribute('id', 'single-question')
        div.innerText = this.title
        questionsDiv.append(div)
        appendOptions(this.options, div)
    }

    static fetchQuestions(){
        this.remove()
        fetch("http://localhost:3000/questions")
        .then(resp => resp.json())
        .then(Question.createQuestions)
    }

}



