import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss'],
})
export class CurriculoListComponent implements OnInit {
  public curriculos: Curriculo[] = []; // vetor para armazenar os currículos

  constructor(private _curriculoService: CurriculoService) {}
  // Injetando o serviço de currículos no construtor

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculoService.getCurriculos(1).subscribe((retornoCurriculo) => {
      this.curriculos = retornoCurriculo;
    });
  }
}
