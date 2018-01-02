import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../user';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: User;

  constructor (private router: Router, private userService: UserService) {
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
     // console.log('Res: ' + res.token);
      localStorage.setItem('token', res.token);
      this.router.navigate(['/main'], {queryParams: {token: res.token}});
    }, error => {
      console.log('Ha habido un error en el login:' + error);
    });

  }

}
