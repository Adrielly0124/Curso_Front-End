//Criar uma calculadora simples em JavaScript

var prompt = require("prompt-sync");
var numero1, numero2, resultado;
var operacao;
var continuar = true;

//funções de operação
function soma(a,b) {
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

while (continuar) {
  console.log("Calculadora Simples");
  console.log("1. Soma");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("5. Sair")
  operacao = Number(prompt("Informa a operação Desejada:"));

  //pedir os números
  numero1 = Number(prompt("Informe o 1º Número:"));
  numero2 = Number(prompt("Informa o 2º Número"));

  //condição de escolha
  switch (operacao) {
    case 1:
        resultado = soma(numero1,numero2);
        console.log("O resultado é: "+resultado)
        break;
    case 2:
        resultado = sub(numero1,numero2);
        console.log("O resultado é: "+resultado);
        break;
    case 3:
        resultado = multi(numero1,numero2);
        console.log("O resultado é: "+resultado)
        break;
    case 4:
        resultado = div(numero1,numero2);
        console.log("O resultado é: "+resultado)
    case 5:
        console.log("Saindo...")
        continuar = false;
        break;
    default:
        console.log("Essa opção não é válida")
        break;
  }
}