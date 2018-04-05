import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../servicios/login.service';
import {Usuario} from '../../Usuario'
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  email: string;
  password: string;

  constructor(private loginService: LoginService, private router:Router, private _cookieService:CookieService) { 
    this.loginService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    });

    var cookie = this._cookieService.get('usuario');
    if(cookie!=null) {
        this.router.navigate([this.getRutaDeTipoUsuario()]);
    }
    console.log(cookie);
  }

  ngOnInit() {
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  logIn(event) {
    event.preventDefault();
    if(this.validarUsuario()){
      this._cookieService.put('usuario', this.email);
      this._cookieService.put('tipoUsuario','dependencia');
      this.router.navigate([this.getRutaDeTipoUsuario()]);
    }else{
      alert("usuario y/o contraseña erroneos");
      this.router.navigate(['login']);
    }

  }

  getRutaDeTipoUsuario() {
    var ruta = '';
    var cookieTipoUsuario = this._cookieService.get('tipoUsuario');
    if(cookieTipoUsuario != null) {
      if(cookieTipoUsuario == 'admin') {
        ruta = 'admin/home';
      }else if(cookieTipoUsuario == 'dependencia') {
        ruta = 'dependencia/home';
      }else if(cookieTipoUsuario == 'denunciante') {
        ruta = 'denunciante/home';
      }
    }
    return ruta;
  }

  validarUsuario() {
    let validacion: boolean;
    validacion = false;
    this.usuarios.forEach(element => {
      if((element.email == this.email) && (element.password == this.password)){
        validacion = true;
      }
    });
    return validacion;
  }
}


