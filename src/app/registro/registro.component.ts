import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {AuthService } from '../auth/authService';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})


export class RegistroComponent implements OnInit {
  user: User;
  prodForm: FormGroup;

  responsejson: any;
  response: any;

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

  constructor(private http: HttpClient, private router: Router,
              private authService: AuthService, private userService: UserService,
              private fb: FormBuilder) {
   // console.log('Hello user');
    this.createForm();
    /*this.users = {
      'email': '',
      'name': '',
      'sex': '',
      'city': '',
      'birthday': '',
      'orientation': '',
      'password': '',
      'imageProfile': ''
    };*/
   /* this.aux = {
      'password2': ''
    };*/
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
      // this.user.orientation = this.user.orientation.value;
      // this.user.sex = this.user.sex.value;
      console.log(this.prodForm.value);
      this.userService.register(this.prodForm.value).subscribe(res => {
        // this.response = res;
          console.log('Res: ' + res);
        this.user.token = res;
        console.log(this.user.token);
        localStorage.setItem('token', this.user.token);
        this.router.navigate(['/main'], {queryParams: {token: this.user.token}});
      }, error => {
        console.log('Ha habido un error al registrarse:' + error);
      });
    } else {
      alert('Las contraseñas no coinciden');
    }
      }

      /*this.http.post('http://localhost:3000/api/signup', this.user).subscribe(response => {
      console.log('dentro de funcion POST');
       // this.response = res;
      //  console.log(this.response);
        this.token = this.response.token;
        console.log(this.token);
        localStorage.setItem('token', this.token);
        this.router.navigate(['/main'], {queryParams: {token: this.token}});
      }, error => {
        console.log('Ha habido un error al registrarse:' + error);
       console.log(error.message);
      });
    } else {
      alert('Las contraseñas no coinciden');
    }
    */
}
