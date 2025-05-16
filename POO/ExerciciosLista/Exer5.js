class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(qtd) {
        if (qtd <= 0) {
            console.log("Quantidade inválida para venda.");
            return;
        }

        if (qtd > this.quantidade) {
            console.log("Estoque insuficiente.");
        } else {
            this.quantidade -= qtd;
            console.log(`${qtd} unidade(s) de "${this.nome}" vendida(s).`);
        }
    }

    repor(qtd) {
        if (qtd > 0) {
            this.quantidade += qtd;
            console.log(`${qtd} unidade(s) adicionada(s) ao estoque.`);
        } else {
            console.log("Quantidade inválida para reposição.");
        }
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$${this.preco.toFixed(2)}`);
        console.log(`Estoque: ${this.quantidade} unidade(s)`);
    }
}