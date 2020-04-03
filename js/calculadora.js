let listaDeBtn = document.querySelectorAll('.btn')
let tela = document.getElementById('tela')
let btnResultado = document.getElementById("result")
let btnApagar = document.getElementById("reset")

listaDeBtn.forEach( (btn, index) => {
    btn.onclick = () => {
        if(btn.textContent == "=" || btn.textContent == "CE"){
            return
        }
        tela.innerHTML += btn.textContent 
    }
})

btnResultado.onclick = () => {
    tela.innerHTML = eval(tela.textContent)
}

btnApagar.onclick = () => {
    tela.innerHTML = ""
}




