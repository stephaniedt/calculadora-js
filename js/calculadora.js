let listaDeBtn = document.querySelectorAll('.btn')
let tela = document.getElementById('tela')
let btnResultado = document.getElementById("result")
let btnApagar = document.getElementById("reset")
let btnDeleteLast = document.getElementById('deleteLast')


listaDeBtn.forEach( (btn) => {
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

btnDeleteLast.onclick = () => {
    tela.innerHTML = tela.innerHTML.substr(0, tela.innerHTML.length -1);
}



// fazer fucntion para nao permitir repetir operador na sequencia (ex: 5++5). e criar um botão que apaga somente o ultimo numero. AC
// if(btn.textContent[index] == btn.textContent[index-1] && btn.textContent == )
// tela.innerHTML += btn.textContent 