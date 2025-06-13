import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

  public vaga: Vaga = new Vaga('', '', '', 0);
  public vagas: Vaga[] = [];
  public imagemPreview: string | ArrayBuffer | null = null;

  constructor(private _vagasService: VagaService) {}

  ngOnInit(): void {
    this.listarVagas();
  }

  resetarFormulario() {
    this.vaga = new Vaga('', '', '', 0);
    this.imagemPreview = null;
  }

  listarVagas() {
    this._vagasService.getVagas().subscribe((retornoVaga) => {
      this.vagas = retornoVaga.map((item) => Vaga.fromMap(item));
    });
  }

  listarVagaUnica(vaga: Vaga) {
    this.vaga = vaga;
    this.imagemPreview = vaga.foto ? `assets/img/vagas/${vaga.foto}` : null;
  }

  cadastrar() {
    const { id, ...vagaSemId } = this.vaga;
    this._vagasService.cadastrarVaga(vagaSemId as Vaga).subscribe(
      () => {
        this.resetarFormulario();
        alert('Vaga cadastrada com sucesso');
        this.listarVagas();
      },
      (err) => {
        alert('Erro ao Cadastrar' + err);
      }
    );
  }

  atualizar(id: number) {
    this._vagasService.atualizarVaga(id, this.vaga).subscribe(
      () => {
        this.resetarFormulario();
        alert('Vaga atualizada com sucesso');
        this.listarVagas();
      },
      (err) => {
        alert('Erro ao atualizar'+ err);
      }
    );
  }

  excluir(id: number) {
    this._vagasService.removerVaga(id!).subscribe(
      () => {
        this.resetarFormulario();
        alert('Vaga excluída com sucesso');
        this.listarVagas();
      },
      (err) => {
        alert('Erro ao Deletar ' + err);
      }
    );
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.vaga.foto = file.name;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
