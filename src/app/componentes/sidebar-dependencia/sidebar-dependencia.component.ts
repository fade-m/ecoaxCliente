import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-dependencia',
  templateUrl: './sidebar-dependencia.component.html',
  styleUrls: ['./sidebar-dependencia.component.css']
})
export class SidebarDependenciaComponent implements OnInit {

  constructor(private router:Router, private _cookieService:CookieService) { 
    var cookie = this._cookieService.get('usuario');
    if(cookie == null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
