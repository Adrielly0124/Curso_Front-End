//Array (vetor) e Matrizes

// => Função de Kalback

//Array - sempre for lista tem que por colchetes
let numeros = [1,2,3,4,5,6,7,8,9]; //cada um deles tem um indice...sempre começa em 0...o indice do ultimo elemento é sempre o total da lista -1
console.log(numeros[8]);
let texto = ["cachorro", "gato", "macaco", "elefante", "arara"];
console.log(texto[3]);
let mista = ["Abobrinha",true,5]; 
console.log(mista[1]);

//Tamanho do Array (length)
console.log(texto.length); //4

//Adicionar elementos ou alterar em um Array 

//adicionar 
//começo - não é tão comum (unshift)
texto.unshift("Coelho");
console.log(texto);
//final (push)
texto.push("Cobra");
console.log(texto)

//remover 
//começo (shift)
texto.shift();
console.log(texto)

//final (pop)
texto.pop();
console.log(texto)

//alteração de valot
texto[2] = "galinha";
console.log(texto);

//percorrer uma array já pronto - for // foreach (a melhor é o foreach - mais facil de escrever e economiza código se a array já está pronta)

//for
for(let i = 0; i<numeros.length; i++){
    console.log("numeros["+i+"]"+numeros[i]);
}

//foreach
texto.forEach(t => {
    console.log(t)
});

//primeiro jeito - exercicio
let lista = [];
for(let i = 1; i<=100; i++){
    lista.push(i);
}
console.log(lista);

//segundo jeito - exercicio
let lista1 = [];
for(let i = 0; i<100; i++){
    lista[i] = i+1;
}
console.log(lista);

//retorna o indice // Se le não encontrar sempre vai retornar -1
texto.indexOf("gato")

//splice - remove o elemento de uma posição específica
texto.splice(2,1); //posição (2), quantidade de vezes que ele vai fazer o delete(1)
console.log(texto);

//Operações avançadas de Array
let valores = [10,20,30,40,50];

//map - cria um novo array baseado no original (não funciona pra texto)
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter - seleciona os elementos a partir de uma operação relacional
let parteValores = valores.filter(x => x > 20);

//Exercicio - filter e map x,35  x*2
let parte2Valores = valores.filter(x => x<35).map(x => x*2);
console.log(parte2Valores);

//reduce - transformar a Array em um único valor
//x = acumulador, y = valor atual
let soma = valores.reduce((x, valorAtual)=>(x+valorAtual),0);

//sort - formas de ordenação de dados
let z = [2,6,3,8,1,7,4,9,5];
z.sort();
console.log(z);