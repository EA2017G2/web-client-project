import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { UserService} from '../services/user.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;

  constructor (private http: HttpClient, private router: Router, private userService: UserService, private fb: FacebookService) {
    console.log('Hello user');
  /*  let initParams: InitParams = {
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
     // console.log('Res: ' + res.token);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/main'], {queryParams: {token: res.token}});
    }, error => {
      console.log('Ha habido un error en el login:' + error);
    });

    /*
    this.http.post('http://localhost:3000/api/signin', this.user).subscribe(resp => {
      this.response = resp.json(); // .tocken;
      this.mensaje = resp.json().message;
      if (this.response.message === 0) {
        this.token = this.response.token;
        this.router.navigate(['/main'], { queryParams: { token: this.token } });
      } else {
        console.log(this.response.message);
      }
    }, error => {
      console.log('Ha habido un error al autenticarse:' + error);
      alert(error.json().message);
    });
*/
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
