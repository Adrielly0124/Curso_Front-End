//Criação de uma classe Carro
class Carro{
    //não tem atributos diretos 
    //ficam dentro do construtor -> define os atributos da classe
    //construtor é uma função que é chamada quando a classe é instanciada
    constructor(marca, modelo, cor, ano, preco){
        this.marca/*atributo*/ = marca; //parametro da função
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.preco = preco;
    }
    //método
    exibirInfo(){
        console.log(`Carro: ${this.marca}, ${this.modelo}, ${this.cor}, ${this.ano}, R$${this.preco}`);
}
}
//criar objeto da classe Carro
let carro1 = new Carro("FIAT", "Uno", "Cinza", 1994, 8000.00);
let carro2 = new Carro("GM", "Corsa", "Preto", 2011, 20000.00);
carro1.exibirInfo(); //chama o método exibirInfo da classe Carro
carro2.exibirInfo(); //chama o método exibirInfo da classe Carro

//atributos privados(#) e publicos

class Usuário{
    #nome; //declaração de atributos privados
    #senha; //declaração de atributos privados
    
  constructor(nome, senha){
    this.#nome = nome;
    this.#senha = senha;
    }

    //método Privado
    #trocarSenha(novaSenha){
        this.#senha = novaSenha;
    }
}

