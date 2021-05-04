class SelectedAnswer {
    constructor(answer){
        this.userId = answer.user_id
        this.optionId = answer.option_id
    }
    
    static data = [];


    static postFetch(){
        fetch('https://localhost:3000/users/:id', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }




}
