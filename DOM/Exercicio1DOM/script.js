//parte 1
let titulo = document.getElementById("titulo");
console.log(titulo);

let paragrafo = document.getElementsByClassName("paragrafo"); //se torna um vetor ou array
console.log("paragrafo");

//parte 2

function mudarTexto() {
    titulo.innerText = "Novo Título";
    descricao.innerText = "Novo Parágrafo";
}

//parte 3
function mudarFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "blue";
}

//parte 4 - adicionar uma classe ao elemento

function adicionarClasse(){
    titulo.classList.add("descricao");
    document.querySelector(".descricao").style.color = "red";
}