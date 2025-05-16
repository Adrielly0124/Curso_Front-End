// Classe base Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// Subclasse Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }

    exibirInfo() {
        super.exibirInfo();
        console.log(`Quantidade de Portas: ${this.quantidadePortas}`);
    }
}

// Exemplo de uso:
const carro1 = new Carro("Honda", "Civic", 2020, 4);
carro1.exibirInfo();