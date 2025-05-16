let idade = 18;

//Exemplo If Else
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//Exemplo If Else encadeado

let nota = 6.5

if (nota>=7) {
    console.log("Aluno aprovado");
}else if (nota>=5){
    console.log("Aluno de recuperação");
}else {
    console.log("Aluno Reprovado");
}


let dia = 3
switch (dia) {
    case 1:
        console.log("Domingo");
    break;
    case 2:
        console.log("Segunda");
    break;
    default:
        console.log("Outro dia...")
    break;
}
