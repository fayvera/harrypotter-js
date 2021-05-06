const questionsDiv = document.getElementById("quiz-container")
let div = document.getElementById("single-question")

class Question{
    constructor(question){
        Question.allQuestions.push(this)
        this.title = question.title
        this.id = question.id
        this.options = question.options.map(o => new Option(o))
        
    }
    static allQuestions = [];
    static counter = 0;

    static createQuestions(questions){
        for (let q of questions){
            new Question(q) 
        }
        const q = Question.allQuestions[Question.counter++]
        q.appendQuestion()
    };
    
    appendQuestion(){
        if (!div){
            div = document.createElement("div")
            div.setAttribute('id', 'single-question')
        }
        const h2 = document.createElement('h2')
        h2.innerText = this.title
        div.append(h2)
        questionsDiv.append(div)
        this.appendOptions(div)
    };
    // end with 10 questions

    checkForEnd(){
        if(Question.allQuestions[Question.counter] == 10) {
            // check if one house has 5 or more
            if (House.gryffindor >= 5 || House.slytherin >=5 || House.ravenclaw >= 5 || House.hufflepuff >= 5){
                // end game and sort percentage
                // call fetch 
                // call function to submit 
            }
        } else {
            // keep playing until there is a tiebreaker or end of questions
            // add 4 more questions and check for tie again
            // if there is a tie, append last question with only the options for tied houses
        }
    };
 
    defineEnd(){
        // fetch results from database
        User.sorting()
    }

    appendOptions(div){
        const ul = document.createElement("ul")
        div.append(ul)
        let shuffleOptions = Question.shuffle(this.options)
        for (let option of shuffleOptions){
            let opt = document.createElement("option")
            opt.innerText = option.content
            opt.id = option.houseId.toString()
            opt.addEventListener("click", Option.nextQuestion)
            ul.append(opt)
        }
    }
    
    static shuffle(array) {
       for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    }


    static fetchQuestions(){
        username.remove()
        buttonQuiz.remove()
        fetch("http://localhost:3000/questions")
        .then(resp => resp.json())
        .then(Question.createQuestions)
    }

}



