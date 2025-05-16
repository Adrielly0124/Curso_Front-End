//Situação de Aprendizagem 01 - Array

const prompt = require("prompt-sync")(); // entrada de dados pelo terminal

//array de notas 
let notas = []; // array de notas 

function inserirNotas(){
    let nota = Number(prompt("Digite a nota: "));
    notas.push(nota);
}

function calcularMedia(){
    let media = notas.reduce((soma, nota) => soma + nota, 0 )/ notas.length;
    console.log("A média é "+media);
}

function menu(){
    let continuar = true;
    while (continuar) {
        console.log(" ===Calculadora Média===");
        console.log("|1. Inserir Nota");
        console.log("|2. Calcular Média");
        console.log("|3. Sair");
        console.log("========================");
        let operacao = prompt("Escolha a Opção desejada: ");
        switch (operacao) {
            case "1":
                inserirNotas();
                break;
            case "2":
                calcularMedia();
                break;
            case "3":
                continuar = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Essa opção não é válida, insira outro número");
                break;
        } //fim do switch
    } //fim do while 
} //fim da function

menu();