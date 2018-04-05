import { Component,DoCheck } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  cookie : string;
  bandera : boolean;
  
  constructor(private _cookieService:CookieService) {
    this.cookie = this._cookieService.get('usuario');
  }

  ngDoCheck(){
    this.cookie = this._cookieService.get('usuario');
    this.isLogin();
  }

  isLogin(){
    if(this.cookie!=null) {
      this.bandera = true;
      console.log("en if: "+ this.bandera);
      return this.bandera;
    } else {
      this.bandera = false;
      console.log("en else: "+this.bandera);
      return this.bandera;
    }
  }
}
