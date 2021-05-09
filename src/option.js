

class Option {
    constructor(option){
        this.content = option.content
        this.id = option.id
        this.houseId = option.house_id
        this.questionId = option.question_id
    }
    static currentSelection = 0;

    static nextQuestion(e){
        if (Question.counter >= 10){
            if(!document.getElementById('submit')){
                const submit = document.createElement('button')
                submit.id = "submit"
                submit.innerText = "Submit"
                div.append(submit)
                submit.addEventListener('click', Option.sortData)
            }        
        } else {
            if(!document.getElementById('next')){
                const next = document.createElement('button')
                next.id = "next"
                next.innerText = "Next"
                div.append(next)
            }  
        next.addEventListener('click', Option.sortData)
        debugger
    }
        Option.currentSelection = e.target.id 
    }

    static sortData(){
        if (Option.currentSelection === "1"){
            House.gryffindor += 1
        } else if (Option.currentSelection === "2"){
            House.slytherin += 1
        } else if (Option.currentSelection === "3"){
            House.ravenclaw += 1
        } else {
            House.hufflepuff +=1
        }
        debugger
        Option.sendData()
    }

    static sendData(){
        User.currentUser.postFetch(Option.currentSelection)
        div.innerHTML = ""
        const q = Question.allQuestions[Question.counter++]
       
        if (q.id >= 11){
            House.checkTies()
        } else {
            q.appendQuestion()
        }


    }
    
}





