class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notas = [];
    }

    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
        } else {
            console.log("Nota inválida. Digite uma nota entre 0 e 10.");
        }
    }

    calcularMedia() {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }

    situacao() {
        const media = this.calcularMedia();
        return media >= 7 ? "Aprovado" : "Reprovado";
    }
}