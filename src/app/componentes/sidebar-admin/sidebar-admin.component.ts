import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {

  constructor(private router:Router, private _cookieService:CookieService) { 
    var cookie = this._cookieService.get('usuario');
    if(cookie == null) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
