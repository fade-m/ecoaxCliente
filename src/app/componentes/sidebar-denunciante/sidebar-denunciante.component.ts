import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-denunciante',
  templateUrl: './sidebar-denunciante.component.html',
  styleUrls: ['./sidebar-denunciante.component.css']
})
export class SidebarDenuncianteComponent implements OnInit {

  constructor(private router:Router, private _cookieService:CookieService) { 
    var cookie = this._cookieService.get('usuario');
    if(cookie == null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

  ruteo() {
    this.router.navigate(['home/denunciante/homes']);
  }

}
