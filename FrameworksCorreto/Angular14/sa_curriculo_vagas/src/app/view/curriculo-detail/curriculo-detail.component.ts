import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-detail',
  templateUrl: './curriculo-detail.component.html',
  styleUrls: ['./curriculo-detail.component.scss'],
})
export class CurriculoDetailComponent implements OnInit {
  public curriculo!: Curriculo;

  constructor(
    private route: ActivatedRoute,
    private _curriculoService: CurriculoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarCurriculo(id);
  }

  carregarCurriculo(id: number) {
    this._curriculoService.getCurriculos(id).subscribe(
      (dados: Curriculo[]) => {
        if (dados && dados.length > 0) {
          this.curriculo = dados[0];
        } else {
          console.error('Nenhum currículo encontrado para o ID:', id);
        }
      },
      (erro: any) => {
        console.error('Erro ao buscar currículo:', erro);
      }
    );
  }
}
