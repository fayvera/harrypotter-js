
class Option {
    constructor(option){
        this.content = option.content
        this.id = option.id
        this.houseId = option.house_id
        this.questionId = option.question_id
    }
    static currentSelection = 0;


    static nextQuestion(e){
       if (Question.counter == Question.allQuestions.length){
            const submit = document.createElement('button')
            submit.id = "submit"
            submit.innerText = "Submit"
            div.append(submit)
       } else {
            if(!document.getElementById('next')){
            const next = document.createElement('button')
            next.id = "next"
            next.innerText = "Next"
            div.append(next)
            }
        }
            Option.currentSelection = e.target.id 
            next.addEventListener('click', Option.sendData)
    }

    static sendData(){
        if (Option.currentSelection === "1"){
            House.gryffindor += 1
        } else if (Option.currentSelection === "2"){
            House.slytherin += 1
        } else if (Option.currentSelection === "3"){
            House.ravenclaw += 1
        } else {
            House.hufflepuff +=1
        }
        User.currentUser.postFetch(Option.currentSelection)
        div.innerHTML = ""
        const q = Question.allQuestions[Question.counter++]
        q.appendQuestion()
        debugger
    }
    
}





