let texto ="Aula de JavaScript" 

//String - cadeia de caracteres 
//Contagem dos caracteres (lenght)
console.log(texto.length); //18

//Maiúsculas e Minúsculas
console.log(texto.toUpperCase); //MAIUSCULA
console.log(texto.toUpperCase); //minuscula

//Partes da String - pedaços do texto
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

//Substituição de texto 
let novoTexto = texto.replace("Java", "Type");
console.log(novoTexto);

//trim (tesoura)
let textoEspaco = "JavaScript";
let textoCortado = textoEspaco.trim();
console.log(textoEspaco);
console.log(textoCortado);

//split - separação
let linguagens = "JavaScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(",");
console.log(linguagens);
console.log(linguagensArray);  