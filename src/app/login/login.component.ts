import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  response: any;
  token: any;
  mensaje: any;
  user: {
    email,
    password
  };

  constructor (private http: Http, private router: Router) {
    console.log('Hello user');
    this.user = {
      'email': '',
      'password': ''
    };
  }
  onSubmit() {
    this.http.post('http://localhost:3000/api/signin', this.user).subscribe((resp => {
      this.response = resp.json(); // .tocken;
      this.mensaje = resp.json().message;
      if (this.response.message === 0) {
        this.token = this.response.token;
        this.router.navigate(['/main'], { queryParams: { token: this.token } });
      } else {
        console.log(this.response.message);
      }
    }));

  }

}
