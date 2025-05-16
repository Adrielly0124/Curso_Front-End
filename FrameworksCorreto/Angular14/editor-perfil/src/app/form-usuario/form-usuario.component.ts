import { Component } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {

  //atributos
  nome: string = "";
  email: string = "";
  telefone: string = "";
  genero: string = "";
  idade: number | null = null;
  profissao: string = "";

  //métodos
  limparDados(){
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.genero = "";
    this.idade = null;
    this.profissao = "";
  }

  validarDados(): boolean {
  // Verificação de campos obrigatórios
    if (!this.nome || !this.email || !this.telefone || !this.genero || this.idade === null || !this.profissao) {
      alert("Preencha todos os campos obrigatórios.");
      return false;
  }

  // Validação do nome (mínimo 2 letras, apenas letras e espaços)

  const nomeValido = /[^[A-Za-zÀ-ú\s]{2,}$]/.test(this.nome);
    if (!nomeValido) {
      alert("Nome inválido. Use apenas letras e ao menos 2 caracteres.");
      return false;
  }

  // Validação do e-mail
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    if (!emailValido) {
      alert("E-mail inválido.");
      return false;
    }

  // Validação do telefone (apenas números e comprimento mínimo de 8 dígitos)
  const telefoneValido = /^\d{8,}$/.test(this.telefone);
    if (!telefoneValido) {
     alert("Telefone inválido. Use apenas números e pelo menos 8 dígitos.");
     return false;
    }

  // Validação da idade (deve ser um número positivo)
    if (isNaN(this.idade) || this.idade <= 0) {
      alert("Idade inválida.");
      return false;
    }

  return true;
}

  salvarDados() {
    if (this.validarDados()) {
      alert("Dados salvos com sucesso!");
      this.limparDados();
    }
  }
  
}