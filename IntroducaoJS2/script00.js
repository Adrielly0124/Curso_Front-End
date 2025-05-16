//Tipos de dados

var nome = "Drika"; //Tipo texto (String)
var idade = 17; //TIpo inteiro(number);
var nota = 9.5; //Tipo decimal(number);
var data; //Tipo indefinido(undefined);
var aprovado = true; //Tipo boleana (boolean);
var diploma = null; //Tipo nula (null);


//Variáveis e Constantes (var,let e const)

var nota1 = 5; //declarar
nota1 = 7 //redefini
var nota1 = 10 //redeclarar

let nota2 = 8; //declarar
nota2 = 9; //redefinir
// let nota2 = 10; //não é possível redeclarar uma let, ela dá erro

const media = 7.5; //declarar
media = 8; // não é possivel redefinir uma constante, dá erro //inicialemnte não da erro, mas depois nao roda no terminal
//const media = ; //erro - redeclarar

//Operadores Aritmeticos
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1

//print dos resultados  Operadores relacionais
console.log(5 > 10);  // true
console.log(10 === "10"); // false (tipos diferentes)
console.log(10 == "10");  // true (conversão implícita)


//Operadores Lógicos (E &&, Ou ||, Não !)
var notaA = 5;
var notaB = 7
console.log(notaA > 7 && notaB > 7); // false
console.log(notaA > 7 || notaB > 7); // true
console.log(!false); // true

//Condicionais (if/else, switch/case)
var idade = 25;

if (idade>=18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    default:
        console.log("Outro mês...");
        break;
}

//Loops (for, while, doWhile)

for (let i = 0; i < 5; i++) { //como começa, quando termina e como evolui
    console.log("Iteração: "+i); //0, 1, 2, 3, 4
}

var condicion = true;
var numero = 3;
var contador = 0;
while (condicion) {
    let sorteio = Math.randow(5)
    contador ++
    if(numero == sorteio){
        console.log("Acertou com "+contador+"tentativas");
        condicion = false;
    }
}

//funções - function

function saudacao(nome) {
  return "Olá, " + nome;
}
let nome = prompt("Maria");
console.log(saudacao(nome));