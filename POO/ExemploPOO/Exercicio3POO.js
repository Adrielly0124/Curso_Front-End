class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para saque.");
        } else if (valor <= 0) {
            console.log("Valor inválido para saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        }
    }

    exibirSaldo() {
        console.log(`Saldo atual de ${this.titular}: R$${this.saldo.toFixed(2)}`);
    }
}

// Exemplo de uso:
const conta1 = new ContaBancaria("João");
conta1.depositar(500);
conta1.sacar(200);
conta1.exibirSaldo();