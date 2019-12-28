const container = document.querySelector("#container")
constrBoard(container, 16)




function appendButton(cont){
    const button = document.createElement('button')
    button.textContent = 'Reset'
    button.addEventListener('click', wipe(cont))
    cont.appendChild(button)
}

function constrBoard(cont, nr){
    if(nr<=100){
        for(let i =0; i<nr; i++){
            for(let j=0; j<nr;j++){
            addBlock(container)
           }
            appendLB(container)
        }
    }
    else{
        let retry = prompt("Try again.")
        constrBoard(cont, retry)
    }
}

function wipe(cont){
    const userVal = prompt("New board size? 100 or less")
}

function addBlock(cont){
    const block = document.createElement("regions")
    block.textContent = "block"
    block.addEventListener('mouseover', ()=>block.style.backgroundColor="blue")
    cont.appendChild(block)
}

function appendLB(cont){
    const LB = document.createElement("br")
    cont.appendChild(LB)
}