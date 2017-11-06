import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {IndexComponent} from './index/index.component';
import {PlayComponent} from './play/play.component';
import {LoginComponent} from './login/login.component';
import {LoginfacebookComponent} from './loginfacebook/loginfacebook.component';
import {RegistroComponent} from './registro/registro.component';
import {RegistrofacebookComponent} from './registrofacebook/registrofacebook.component';
import {AboutComponent} from './about/about.component';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'play', component: PlayComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginfacebook', component: LoginfacebookComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registrofacebook', component: RegistrofacebookComponent},
  {path: 'about', component: AboutComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    IndexComponent,
    LoginComponent,
    LoginfacebookComponent,
    RegistroComponent,
    RegistrofacebookComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
