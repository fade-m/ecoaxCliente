import { Usuario } from './../Usuario';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import 'rxjs/Rx';
import {} from '../Usuario'


@Injectable()
export class LoginService {


  domain: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getUsuario() {

  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.domain+'/usuarios')
    .map(res => res);

  }

  addUsuarios(newUsuario: Usuario) {
    return this.http.post(this.domain + '/usuarios', newUsuario)
    .map(res => res);
  }

}
