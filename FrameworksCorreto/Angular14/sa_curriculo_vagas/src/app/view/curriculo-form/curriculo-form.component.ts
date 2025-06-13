import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss'],
})
export class CurriculoFormComponent implements OnInit {
  public curriculo: Curriculo = {
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

  public curriculos: Curriculo[] = [];
  public imagemPreview: string | ArrayBuffer | null = null;

  constructor(private _curriculoService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculo();
  }

  listarCurriculo() {
    this._curriculoService.listarCurriculo().subscribe((retorno) => {
      this.curriculos = retorno;
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = { ...curriculo };
    this.imagemPreview = curriculo.foto
      ? `assets/img/curriculos/${curriculo.foto}`
      : null;
  }

  cadastrar() {
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.resetarFormulario();
        alert('Currículo cadastrado com sucesso');
        this.listarCurriculo();
      },
      (err) => alert('Erro ao cadastrar currículo:' + err)
    );
  }

  atualizar(id: number) {
    this._curriculoService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.resetarFormulario();
        alert('Currículo atualizado com sucesso');
        this.listarCurriculo();
      },
      (err) => alert('Erro ao atualizar currículo:' + err)
    );
  }

  excluir(id: number) {
    if (!id || id === 0) {
      console.warn('ID inválido, operação cancelada.');
      return;
    }

    this._curriculoService.removerCurriculo(id).subscribe(
      () => {
        this.resetarFormulario();
        alert('Currículo excluído com sucesso');
        this.listarCurriculo();
      },
      (err) => alert('Erro ao excluir currículo:'+ err)
    );
  }

  resetarFormulario() {
    this.curriculo = {
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
    this.imagemPreview = null;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.curriculo.foto = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
