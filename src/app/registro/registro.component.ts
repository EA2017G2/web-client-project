import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {AuthService } from '../auth/authService';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../../../../ionic-app-project/src/pages/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {
  user: User;
  prodForm: FormGroup;

  /*user: {
    email,
    name,
    sex,
    city,
    birthday,
    orientation,
    password,
    imageProfile
  }*/
  /*aux: {
    password2
  }*/
  sex = [
    'hombre', 'mujer', 'otro'];
  orientation = [
    'hombres', 'mujeres', 'ambos'];

  constructor(private router: Router,
              private userService: UserService,
              private fb: FormBuilder) {
   // console.log('Hello user');
    this.createForm();
    }

  ngOnInit(): void {
    console.log('inside register component');
  }

 /* getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => user = users); // paasa el array emitido al callback q modificara la propiedad del componente
  }*/
  createForm() {
    this.prodForm = this.fb.group({
      email: ['', Validators.required],
      name : ['', Validators.required ],
      birthday: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      sex: '',
      city: '',
      orientation: '',
      imageProfile: '',
    });
  }
  onSubmit() {
    if (this.prodForm.value.password === this.prodForm.value.password2) {
      console.log('!!!!!!!!!!!!!!!!!!onSubmit - Sign Up!!!!', this.prodForm.value);
      this.userService.register(this.prodForm.value).subscribe(res => {
          console.log('Res: ' + res.token);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/main'], {queryParams: {token: res.token}});
      }, error => {
       console.log('Ha habido un error al registrarse:' + error);
      });
    } else {
      alert('Las contraseñas no coinciden');
    }
      }

      registroFacebook(){

      }
}
