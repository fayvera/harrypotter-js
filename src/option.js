

function appendOptions(options, element){
    const ul = document.createElement("ul")
    element.append(ul)
    for (let option of options){
        let opt = document.createElement("option")
        opt.innerText = option.content
        opt.addEventListener("click", nextQuestion)
        ul.append(opt)
    }    
}


function nextQuestion(e){
    const questionDiv = document.getElementById('single-question')
    // Only want to appear after a selection was made
    const next = document.createElement('button')
    next.innerText = "Next"
    debugger
    questionDiv.append(next)

    if (e.target.value === true){

        // next.addEventListener('click', nextQuestion)
    }
    
}