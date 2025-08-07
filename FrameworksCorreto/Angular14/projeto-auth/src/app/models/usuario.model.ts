export class Usuario {
    id?: number; //opcional - gerado pelo sjon server
    nome: string;
    email: string;
    senha: string;
    dataCriacao?: Date; // adicionado pelo servidor

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

