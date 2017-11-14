import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {



  tocken: any;
  confirm: any;
  user: {
    orientation
  }

  orientation = [
    {id: 1, value: 'hombres'},
    {id: 2, value: 'mujeres'},
    {id: 3, value: 'ambos'}
  ];
  constructor (private http: Http) {
    console.log('Hello user');
    this.user = {
      'orientation': ''
    };
  }
  /*onSubmit() {
    this.http.post('http://localhost:3000/api/signUp', this.user).subscribe((resp => {
      this.confirm = resp;
      this.tocken = resp; // .tocken;
      console.log(this.user);
      console.log(this.tocken);
    }));
    window.location.replace('/?cal=' + this.tocken);}*/
}

