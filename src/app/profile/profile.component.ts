import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from '../services/user.service';
import { FileUploader } from 'ng2-file-upload';
import {User } from '../user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  file: any;
  user: User;
  name: any;
  birthday: any;
  city: any;
  age: any;
  constructor(private userService: UserService) {
    this.profile();
  }
  profile() {
    this.userService.profile().subscribe(res => {
      this.user = res[0];
      this.birthday = res[0].birthday;
      // var now= new Date();
      // var born = new Date (this.birthday.value);
      // this.age = Math.floor((now.getTime()-born.getTime()) / (365 * 24 * 60 * 60 * 1000));
      this.name = res[0].name;
      this.city = res[0].city;
      //  this.user = res;
      console.log('Welcome to :', this.user);
    }, error => {
      console.log('Error al mostrar Perfil de User:' + error);
    });
  }

  onClick2(username){
    console.log("usuario: "+ username);
    this.userService.updateUsername(username).subscribe(res => {
    });
  }
  onClick3(city){
    console.log(city);
    this.userService.updateCity(city).subscribe(res => {
    });
  }

  onClick4(password){
    console.log(password);
    this.userService.updatePassword(password).subscribe(res => {
    });
  }
  /*
  pic: any;
  upload(formData) {
    this.userService.addPic(formData.value).subscribe(res => {
      this.pic = res;
      console.log(this.pic);
    }, error => {
      console.log('Error al mostrar Perfil de User:' + error);
    });
  }
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }
*/


}
