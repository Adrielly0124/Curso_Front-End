import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss'],
})
export class CurriculoFormComponent implements OnInit {
  // Objeto para vincular ao formulário
  public curriculo: Curriculo = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    dataNascimento: '',
    dependentes: false,
    estadoCivil: '',
    formacao: '',
    idiomas: '',
    cursos: '',
    areaInteresse: '',
    objetivo: '',
    habilidades: '',
    disponibilidade: false,
    experiencia: '',
    foto: '',
  };

  // Lista de currículos
  public curriculos: Curriculo[] = [];
  vagas: any;

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculo();
  }

  // Listar todos os currículos
  listarCurriculo() {
    this._curriculoService.listarCurriculo().subscribe((retorno) => {
      this.curriculos = retorno;
    });
  }

  // Preencher o formulário com um currículo existente
  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  // Cadastrar novo currículo
  cadastrar() {
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.resetarFormulario();
        this.listarCurriculo();
      },
      (err: any) => {
        console.error('Erro ao cadastrar currículo:', err);
      }
    );
  }

  // Atualizar currículo
  atualizar(id: number) {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(
      (): void => {
        this.resetarFormulario();
        this.listarCurriculo();
      },
      (err: any): void => {
        console.error('Erro ao atualizar currículo:', err);
      }
    );
  }

  // Excluir currículo
  excluir(id: number) {
    this._curriculoService.excluirCurriculo(id).subscribe(
      () => {
        this.listarCurriculo();
      },
      (err: any) => {
        console.error('Erro ao excluir currículo:', err);
      }
    );
  }

  // Resetar formulário
  resetarFormulario() {
    this.curriculo = {
      id: 0,
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      dataNascimento: '',
      dependentes: false,
      estadoCivil: '',
      formacao: '',
      idiomas: '',
      cursos: '',
      areaInteresse: '',
      objetivo: '',
      habilidades: '',
      disponibilidade: false,
      experiencia: '',
      foto: '',
    };
  }

  // Manipular seleção de arquivo
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.curriculo.foto = file.name; // ou use FileReader para armazenar o base64, se necessário
    }
  }
}
