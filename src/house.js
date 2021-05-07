class House {
    static all = [];
    static gryffindor = 0;
    static slytherin = 0;
    static ravenclaw = 0;
    static hufflepuff = 0;


    static checkTies(){
        if (House.gryffindor == House.slytherin || House.gryffindor == House.ravenclaw 
            || House.gryffindor == House.hufflepuff || House.slytherin == House.ravenclaw ||
            House.slytherin == House.hufflepuff || House.hufflepuff == House.ravenclaw){
            // if tied, append last question only with options for the tied houses
            debugger
        } else {
            // Declare sorting fetch 
            // User.getSorting()
        }
    }

}