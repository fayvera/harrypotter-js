const alertMess = document.getElementById("alert-tie")
class User {
    constructor(user){
        this.name = user.name
        this.id = user.id
        User.currentUser = this 
    }

    static currentUser = ''

    static getUsername(){
        const newUser = username.value
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: newUser})
        })
        .then(resp => resp.json())
        .then(r => {
            new User(r);
        })
        .catch((error) => {
            console.log(error)
        })
        Question.fetchQuestions()
    }
    

    postFetch(data){
        return fetch(`http://localhost:3000/users/${this.id}/selected_answers`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    static getSorting(){
        fetch(`http://localhost:3000/users/${this.id}`)
        .then(resp => resp.json())
        .then(this.declareWinner)
    }

    static declareWinner(data){
        const alertMess = document.getElementById('alert-tie')
        if (!!alertMess){
            alertMess.remove()
        }
        div.remove()
        const newDiv = document.createElement("div")
        newDiv.id = "final-page"
        quizContainer.append(newDiv)
        const declare = document.createElement("h2")
        declare.innerText = `Here is your sorting, ${data.name}`
        const ul = document.createElement("ul")
        newDiv.append(declare, ul)
        debugger
        for (let value in data.housing){
            const li = document.createElement("li")
            li.innerText = `${value}: ${data.housing[value]}%`
            ul.append(li)
        }
        User.playAgain()
    }


    static playAgain(){
        const home = document.createElement("button")
        home.id = "play-again"
        home.innerText = "Play again?"
        const pgWrapper = document.getElementById("pgwrapper")
        pgWrapper.append(home)
        home.addEventListener('click', function(){
            House.clearSelections()
            Question.clearQuestions()
            User.currentUser = {}
            document.getElementById('final-page').remove()
            home.remove()
            pgWrapper.append(username, buttonQuiz)
            debugger
        })
    }
}