import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { UserService} from '../services/user.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;


  constructor (private http: HttpClient, private router: Router, private userService: UserService, private fb: FacebookService) {


    console.log('Hello user');
    let initParams: InitParams = {
      appId: '141583893225829',
      xfbml: true,
      version: 'v2.8'
    };
    fb.init(initParams);
    /*this.user = {
      'email': '',
      'password': ''
    };*/
    this.user = new User();
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.userService.login(this.user).subscribe( res => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['/main'], {queryParams: {token: res.token}});
    }, error => {
      console.log('Ha habido un error en el login:' + error);
    });

  }

  loginFacebook() {
      this.fb.login()
        .then((response: LoginResponse) => {

          console.log(response);
       //   localStorage.setItem('token', response.token);
        //  this.router.navigate(['/main'], {queryParams: {token: response.token}});
        }
      )
      .catch((error: any) => console.error(error));
  }

}
