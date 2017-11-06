import { Component } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registrofacebook',
  templateUrl: './registrofacebook.component.html'
})
export class RegistrofacebookComponent {
  tocken: any;
  confirm: any;
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
  sex = [
    {id: 1, value: 'hombre'},
    {id: 2, value: 'mujer'},
    {id: 3, value: 'otro'}
  ];
  orientation = [
    {id: 1, value: 'hombres'},
    {id: 2, value: 'mujeres'},
    {id: 3, value: 'ambos'}
  ];
  constructor (private http: Http) {
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
  }
  onSubmit() {
    this.http.post('http://someurl.com', this.user).subscribe((resp => {
      this.confirm = resp;
      this.tocken = resp; // .tocken;
      console.log(this.user);
      console.log(this.tocken);
    }));
    window.location.replace('/?cal=' + this.tocken);
  }
}
