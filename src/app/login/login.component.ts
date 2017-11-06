import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  tocken: any;
  user: {
    email,
    password
  };

  constructor (private http: Http) {
    console.log('Hello user');
    this.user = {
      'email': '',
      'password': ''
    };
  }
  onSubmit() {
    this.http.post('http://localhost:3000/api/signin', this.user).subscribe((resp => {
      this.tocken = resp; // .tocken;
      console.log(this.user);
      console.log(this.tocken);
    }));
    // window.location.replace('/?cal=' + this.tocken);
  }

}
