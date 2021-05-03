function appendOptions(options, element){
    const ul = document.createElement("ul")
    element.append(ul)
    for (let option of options){
        // debugger
        const opt = document.createElement("option")
        opt.innerText = option.content
        ul.append(opt) 
        getElement()
    }
}

function getElement(){
    const element = document.getElementsByTagName("option")
    for (let e of element){
        console.log(e)
        // debugger
        selectOption(e)
    }
}

function selectOption(arg){
    const select = arg.addEventListener("click", function(e){
        console.log(e)
        // arg.addEventListener("change")
        // debugger 
    })
}