import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {HttpClientModule} from '@angular/common/http'

import {LoginService} from './servicios/login.service' 

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { HomeComponent } from './componentes/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { NotificationComponent } from './componentes/notification/notification.component';
import { SidebarAdminComponent } from './componentes/sidebar-admin/sidebar-admin.component';
import { SidebarDenuncianteComponent } from './componentes/sidebar-denunciante/sidebar-denunciante.component';
import { SidebarDependenciaComponent } from './componentes/sidebar-dependencia/sidebar-dependencia.component';
import { HomeDenuncianteComponent } from './componentes/home-denunciante/home-denunciante.component';
import { HomeDependenciaComponent } from './componentes/home-dependencia/home-dependencia.component';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';



const appRoutes: Routes = [
  {path: '', redirectTo:'/login',pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/home', component: HomeAdminComponent},
  {path: 'dependencia/home', component: HomeDependenciaComponent},
  {path: 'denunciante/home', component: HomeDenuncianteComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NotificationComponent,
    SidebarAdminComponent,
    SidebarDenuncianteComponent,
    SidebarDependenciaComponent,
    HomeDenuncianteComponent,
    HomeDependenciaComponent,
    HomeAdminComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
