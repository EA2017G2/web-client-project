import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetPassword.component.html'
})
export class ForgetPasswordComponent {
  responsejson: any;
  token: any;
  response: any;
  user: {
    email
  }

  constructor(private http: HttpClient, private router: Router) {
    console.log('Hello user');
    this.user = {
      'email': ''
    };
  }

  onSubmit() {
    this.http.post('http://localhost:3000/api/users/forgetPassword', this.user).subscribe(res => {
      // alert(res.message);
        this.router.navigate(['/login'], {queryParams: {token: this.token}});
      }, error => {
        console.log('Ha habido un error:' + error);
        alert(error.json().message);
      });
  }
}
