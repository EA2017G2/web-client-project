import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../../../../ionic-app-project/src/pages/user';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;

  constructor (private http: HttpClient, private router: Router, private userService: UserService) {
    console.log('Hello user');
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
      console.log('Res: ' + res.token);
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

}
