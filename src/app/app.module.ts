import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/tokenInterceptor';
import { AuthService } from './auth/authService';
import {IndexComponent} from './index/index.component';
import {PlayComponent} from './play/play.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';
import {ChatComponent} from './chat/chat.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginfacebookComponent} from './loginfacebook/loginfacebook.component';
import {RegistroComponent} from './registro/registro.component';
import {MainComponent} from './main/main.component';
import {RegistrofacebookComponent} from './registrofacebook/registrofacebook.component';
import {AboutComponent} from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ForgetPasswordComponent} from './forgetPassword/forgetPassword.component';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'play', component: PlayComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgetpassword', component: ForgetPasswordComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'loginfacebook', component: LoginfacebookComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'registrofacebook', component: RegistrofacebookComponent},
  {path: 'about', component: AboutComponent},
  {path: 'main', component: MainComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    ChatComponent,
    SettingsComponent,
    IndexComponent,
    ProfileComponent,
    LoginComponent,
    ForgetPasswordComponent,
    LoginfacebookComponent,
    RegistroComponent,
    RegistrofacebookComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
