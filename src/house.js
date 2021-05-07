class House {
    static all = [];
    static gryffindor = 0;
    static slytherin = 0;
    static ravenclaw = 0;
    static hufflepuff = 0;

    static sumHouse = House.all.push(House.gryffindor, House.slytherin, House.hufflepuff, House.ravenclaw)

    static checkTies(){
        const winner = Math.max(...sumHouse)
        if (House.gryffindor && House.slytherin == winner || House.gryffindor && House.ravenclaw == winner
            || House.gryffindor && House.hufflepuff == winner || House.slytherin && House.ravenclaw == winner ||
            House.slytherin && House.hufflepuff == winner || House.hufflepuff && House.ravenclaw == winner){
               
            debugger
            // if tied, append last question only with options for the tied houses
            const alertMess = document.createElement('h3')
            alertMess.innerText = "Oh wow! You have a tie! Let's keep going!"
            questionsDiv.append(alertMess)
            
            Option.nextQuestion()

        } else {
            debugger
            // Declare winner with sorting fetch 
            User.getSorting()
        }
    }

}