import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
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
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'play', component: PlayComponent},
  {path: 'login', component: LoginComponent},
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
    LoginfacebookComponent,
    RegistroComponent,
    RegistrofacebookComponent,
    MainComponent,
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
