import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-home-denunciante',
  templateUrl: './home-denunciante.component.html',
  styleUrls: ['./home-denunciante.component.css']
})
export class HomeDenuncianteComponent implements OnInit {

  constructor(private router:Router, private _cookieService:CookieService) { 
    var cookie = this._cookieService.get('usuario');
    if(cookie == null) {
      this.router.navigate(['login']);
    }
  }


  ngOnInit() {
  }

}
