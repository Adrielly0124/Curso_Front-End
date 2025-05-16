class Produto {
    constructor(nome, estoque, preco) {
        this.nome/*atributo*/ = nome; //parametro da função
        this.estoque = estoque;
        this.preco = preco;
    }
    //método
    vender(quantidade) {
        if (quantidade > this.estoque) {
            console.log(`Estoque Insuficiente! Quantdade em Estoque é = ${this.estoque} produtos em estoque`);
            return;
        }
        this.estoque -= quantidade;
        console.log(`${quantidade} ${quantidade === 1 ? "Unidade" : "Unidades"}`)
    }

    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`Estoque Reposto! Quantidade em Estoque é = ${this.estoque} produtos em estoque`);
        return;
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}, Estoque: ${this.estoque}, Preço: R$${this.preco}`);
    }
}
let produto1 = new Produto("Iphone 15", "5", 8000.00);
let produto2 = new Produto("MouseSG", "12", 120.00);
produto1.exibirInfo(); //chama o método exibirInfo da classe Carro
produto2.exibirInfo();