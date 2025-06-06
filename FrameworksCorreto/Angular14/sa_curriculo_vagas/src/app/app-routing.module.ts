import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { CurriculoFormComponent } from './view/curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './view/curriculo-list/curriculo-list.component';
import { CurriculoDetailComponent } from './view/curriculo-detail/curriculo-detail.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'vagas', component: VagasComponent },
  { path: 'painel-vagas', component: PainelVagasComponent },
  { path: 'curriculo-form', component: CurriculoFormComponent },
  { path: 'curriculos', component: CurriculoListComponent },
  { path: 'curriculos/:id', component: CurriculoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
