import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean{
    if(this.authService.estaAutenticado()){
      return true; //se o usuário estiver autenticado, permite o acesso à rota
    } else {
        this.router.navigate(["/login"]);
        return false; //se não estiver autenticado, redireciona para a página de login e bloqueia o acesso à rota
    }
  }
}

