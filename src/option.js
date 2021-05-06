

class Option {
    constructor(option){
        this.content = option.content
        this.id = option.id
        this.houseId = option.house_id
        this.questionId = option.question_id
    }
    static currentSelection = 0;

    static nextQuestion(e){
    //     let btnQuest = document.createElement('button')
    //    if (Question.counter = Question.allQuestions.length){
    //         btnQuest.id = "submit"
    //         btnQuest.innerText = "Submit"
    //         div.append(btnQuest)
    //         // submit.id = "submit"
    //         // submit.innerText = "Submit"
    //         // div.append(submit)
    //         // submit.addEventListener('click', Option.sendData)
    //     } else {
            if(!document.getElementById('next')){
                const next = document.createElement('button')
                next.id = "next"
                next.innerText = "Next"
                div.append(next)
            }  
        next.addEventListener('click', Option.sendData)
        Option.currentSelection = e.target.id 
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
    }
    
}





