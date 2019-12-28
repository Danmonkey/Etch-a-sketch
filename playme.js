const boardSize = document.currentScript.getAttribute('ins')
const container = document.querySelector("#container")
const btncont = document.querySelector("#btncont")

constrBoard(container, boardSize)
 
appendButton(btncont, container)

function appendButton(bcont, cont){
    const button = document.createElement('button')
    button.textContent = 'Reset'
    button.addEventListener('click', ()=> wipe(cont))
    bcont.appendChild(button)
}

function constrBoard(cont, nr){
    if(nr<=60){
        for(let i =0; i<nr; i++){
            const LB = document.createElement("ul")
            cont.appendChild(LB)
            for(let j=0; j<nr;j++){
            addBlock(LB)
           }
        }
    }
    else{
        let retry = prompt("Try again. 60 or less")
        constrBoard(cont, retry)
    }
}

function wipe(bcont){
    const userVal = prompt("New board size? 60 or less")
    
    while (bcont.firstChild){
        bcont.removeChild(bcont.firstChild)
    }

    constrBoard(bcont, userVal)
}

function addBlock(cont){
    const block = document.createElement("li")
    block.style.padding = "10px"
    block.addEventListener('mouseover', ()=>block.style.backgroundColor="black")
    cont.appendChild(block)
}
