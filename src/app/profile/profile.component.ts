import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../user';
import { UserService} from '../services/user.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  sex = ['man', 'woman', 'other'];
  user: User;
  constructor(
    private service: UserService
  ) {}


updateName(user: User): void {
  this.service.updateName(user)
  .subscribe(res => {
    this.user = res[0];
  }, error => {
      console.log('Error al actualizar nombre:' + error);
    });
}

  updateCity(user: User): void {
    this.service.updateCity(user)
      .subscribe(res => {
        this.user = res[0];
      }, error => {
        console.log('Error al actualizar ciudad:' + error);
      });
  }





}
