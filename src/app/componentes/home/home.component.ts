import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Usuario'
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string;
  mensajes: string[];

  constructor(private router:Router, private _cookieService:CookieService) { 
    var cookie = this._cookieService.get('usuario');
    if(cookie == null) {
      this.router.navigate(['login']);
    }
    
    
    this.email = cookie;
  }

  ngOnInit() {
    this.mensajes = ["hola","hola","hola","hola"];
  }

  signOut() {
    this._cookieService.removeAll();
  }

}
