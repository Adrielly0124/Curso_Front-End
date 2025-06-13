import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  

  listarCurriculo(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  private apiUrl = 'http://localhost:3008/curriculos';

  constructor(private http: HttpClient) {}

  // Listar todos os currículos
  getCurriculos(id: number): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.apiUrl);
  }

  // Obter um único currículo por ID
  getCurriculoById(id: number): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Curriculo>(url);
  }

  // Cadastrar um novo currículo
  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.apiUrl, curriculo);
  }

  // Atualizar currículo existente
  atualizarCurriculo(id: number, curriculo: Curriculo): Observable<Curriculo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo>(url, curriculo);
  }

  // Excluir currículo
  removerCurriculo(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


