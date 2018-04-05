import { Usuario } from './../../Usuario';
import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../servicios/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private usuario = new Usuario();
  constructor(private loginService: LoginService, private router:Router) { 

  }

  ngOnInit() {
  }

  signUp() {
    this.loginService.addUsuarios(this.usuario).subscribe(usuario => {
        console.log(usuario);
        alert("Registro exitoso");
        this.router.navigate(['login']);
    });
  }

}
