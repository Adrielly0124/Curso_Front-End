import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3000/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  registrar(usuario:any):Observable<any>{
    // primeiro busca no banco de dados se o usuário já existe a partir do em
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(usuarios => {
        if(usuarios.length>0){ //caso exista
          //cria uma mensagem de erro para ser tratada no try/catch
          return throwError (()=> new Error("Usuário Já Cadastrado")); // throwError é usado para criar uma mensagem de erro que será tratada no componente catch 
        }else{ //caso não exista
          //cadastra o usuário no Banco de Dados
          return this.http.post<any>(this.apiUrl, usuario);
        }
      })
    )
  }

  login(credenciais: any): Observable<boolean>{
    // pega as credenciais do usuário (email e senha)
    return this.http.get<any[]>(
      //verifica no Banco de Dados se email e senha foram encontradas (estão corretas)
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios => {
          if(usuarios.length>0){ //se foi encontrado
            // armazena as informações do usuário e a chave no localStorage
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));
            //retorna que o acesso foi permitido
            return true;
          }else{ //caso não encontrado
            //fazer um erro
            //retorno que meu usuário não foi encontrado e o acesso não está permitido
            //fazer um erro
            return false;
          }
        })
      )
  }

  logout(){
    localStorage.removeItem(this.CHAVE_AUTH); //remove a chave de autenticação do usuário
    this.router.navigate(['/home']); //redireciona para a página inicial/home
  }

  //verificar se o usuário já está logado (CHAVE_AUTH)
  estaAutenticado(): boolean {
    //vou transformar uma variavel di Tipo Texto em Boolean
    return !!localStorage.getItem(this.CHAVE_AUTH); //se existir a chave retorna true, se não existir retorna false
  }

  // pegar as informações do usuário no localStorage
  getUsuarioAtual(): any{
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}'); //retorna o usuário atual ou um objeto vazio
  }
}


