
class House {
    static all = [];
    static gryffindor = 0;
    static slytherin = 0;
    static ravenclaw = 0;
    static hufflepuff = 0;

    
    static checkTies(){
        const sumHouse = [House.gryffindor, House.slytherin, House.hufflepuff, House.ravenclaw]
        const winner = Math.max(...sumHouse)
        debugger
        if (House.gryffindor == House.slytherin && House.gryffindor == winner || House.gryffindor == House.ravenclaw && House.gryffindor == winner
            || House.gryffindor == House.hufflepuff && House.gryffindor == winner || House.slytherin == House.ravenclaw && House.slytherin == winner ||
            House.slytherin == House.hufflepuff && House.slytherin == winner || House.hufflepuff == House.ravenclaw && House.ravenclaw == winner){
               
            // if tied, keep appending questions 

            if (!alertMess){
                const alertMess = document.createElement('h3')
                alertMess.id = "alert-tie"
                alertMess.innerText = "Oh wow! You have a tie! Let's keep going!"
                questionsDiv.append(alertMess)
            }
            const q = Question.allQuestions[Question.counter]
            q.appendQuestion()

        } else {
            // Declare winner with sorting fetch 
            User.getSorting()
        }
    }

}