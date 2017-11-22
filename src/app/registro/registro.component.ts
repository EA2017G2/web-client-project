import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  responsejson: any;
  token: any;
  response: any;
  user: {
    email,
    name,
    sex,
    city,
    birthday,
    orientation,
    password,
    imageProfile
  }
  aux: {
    password2
  }
  sex = [
    {value: 'hombre'},
    {value: 'mujer'},
    {value: 'otro'}
  ];
  orientation = [
    {value: 'hombres'},
    {value: 'mujeres'},
    {value: 'ambos'}
  ];

  constructor(private http: Http, private router: Router) {
    console.log('Hello user');
    this.user = {
      'email': '',
      'name': '',
      'sex': '',
      'city': '',
      'birthday': '',
      'orientation': '',
      'password': '',
      'imageProfile': ''
    };
    this.aux = {
      'password2': ''
    };
  }

  onSubmit() {
    if (this.user.password === this.aux.password2) {
      this.user.orientation = this.user.orientation.value;
      this.user.sex = this.user.sex.value;
      console.log(this.user);
      this.http.post('http://localhost:3000/api/signup', this.user).subscribe(res => {
        this.response = res.json();
        console.log(this.response);
        this.token = this.response.token;
        this.router.navigate(['/main'], {queryParams: {token: this.token}});
      }, error => {
        console.log('Ha habido un error al registrarse:' + error);
        alert(error.json().message);
      });
    } else {
      alert('Las contraseñas no coinciden');
    }

  }
}
