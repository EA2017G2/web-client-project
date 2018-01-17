import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UserService } from '../services/user.service';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  file: any;
  constructor(private userService: UserService) {
  }
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



}
