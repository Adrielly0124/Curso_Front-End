//Exemplo de uso do DOM
//header apenas com DOM

let header = document.createElement("div");
document.body.appendChild(header);
header.style.backgroundColor = "blue";
header.style.height = "8vh";
let menu = document.createElement("div");
header.appendChild(menu);
header.classList.add("header");
menu.classList.add("menu");
let menuItens = ["Início", "Produtos", "Contato"];

menuItens.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    menu.appendChild(item);
});
menu.style.display = "flex";
menu.style.justifyContent = "space-around";
menu.style.alignItems = "center";
menu.style.color = "white";
menu.style.height = "100%";
menu.style.fontSize = "3vh";

//Exercicio - criar um footer usando DOM

let footer = document.createElement("")