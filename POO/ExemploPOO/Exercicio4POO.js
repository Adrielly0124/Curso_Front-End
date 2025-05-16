class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    aumentarSalario(percentual) {
        if (percentual > 0) {
            const aumento = this.salario * (percentual / 100);
            this.salario += aumento;
            console.log(`Salário aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
        } else {
            console.log("Percentual inválido para aumento.");
        }
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salário: R$${this.salario.toFixed(2)}`);
    }
}

// Exemplo de uso:
const funcionario1 = new Funcionario("Maria", 3000, "Analista");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();