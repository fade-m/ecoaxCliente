import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../Usuario'
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  email: string;
  mensaje: string;
  usuario: string;

  constructor(private router:Router, private _cookieService:CookieService) { 
    var cookie = this._cookieService.get('usuario');
    if(cookie == null) {
      this.router.navigate(['login']);
    }
    this.email = cookie;
    this.mensaje = "hola te saludo";
    this.usuario = "fulano";
  }

  ngOnInit() {
  }

}
