import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FacebookModule } from 'ngx-facebook';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/tokenInterceptor';
import { AuthService } from './auth/authService';
import {IndexComponent} from './index/index.component';
import {ContactsComponent} from './contacts/contacts.component';
import {PlayComponent} from './play/play.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';
import {PicturesComponent} from './pictures/pictures.component';
import {ChatComponent} from './chat/chat.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistroComponent} from './registro/registro.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {ForgetPasswordComponent} from './forgetPassword/forgetPassword.component';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'play', component: PlayComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'forgetPassword', component: ForgetPasswordComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'profile', component: ProfileComponent},
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
    ContactsComponent,
    ProfileComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegistroComponent,
    PicturesComponent,
    MainComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FacebookModule.forRoot()

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
