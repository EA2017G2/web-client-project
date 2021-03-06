import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {User} from '../user';


@Injectable()
export class UserService {
  private apiURL = 'http://localhost:3000/api/users';
  private apiUpdates = 'http://localhost:3000/api/users/update';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  us: User;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log();
    return this.http.get<User[]>(this.apiURL)
      .catch(this.handleError);
    // return of(USERS);   of(USERS) retorna un Observable<User[]>
    // q emite un single value, el array de users desde el body del HTTP response
  }
  register(user: User): Observable<User> {
    console.log('data: ', user);
    const url = `${this.apiURL}/signup`;
    console.log(url);
    console.log('headers', this.headers);
    /*  this.us = new User();
        this.us.email = 'email13';
        this.us.name = 'name';
        this.us.token = 'token';
        this.us.password = 'password';
        this.us.birthday = new Date();
        this.us.city = 'city';
        this.us.imageProfile = null;
        this.us.orientation = 'both';
        this.us.sex = 'sex';*/
    console.log('this.user', user);
    return this.http.post<User>(url, user, {headers: this.headers})
      .catch(this.handleError) ;
  }
  login(user: User): Observable<User> {
    const url = `${this.apiURL}/signin`;
    // console.log(url);
    // console.log('headers', this.headers);
    console.log('this.user', user);
    return this.http.post<User>(url, user, {headers: this.headers})
      .catch(this.handleError);
  }
  profile(): Observable<User> {
    const url = `${this.apiURL}/profile`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.get<User>(url, {headers: this.headers})
      .map(res => {
        console.log('headerProfile2:' , this.headers);
        return res;
      })
      .catch(this.handleError);
  }

  addPic(pic): Observable<User> {
    const url = `${this.apiURL}/addPic`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    console.log(pic);
    return this.http.post<User>(url, pic, {headers: this.headers})
      .map(res => {
        console.log('headerProfile2:' , this.headers);
        return res;
      })
      .catch(this.handleError);
  }

  updateUsername(username): Observable<User> {
    console.log(username);
    const url = `${this.apiURL}/updateUsername`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.post<User>(url, {username : username.toString()}, {headers: this.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  updateCity(city): Observable<User> {
    console.log(city);
    const url = `${this.apiURL}/updateCity`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.post<User>(url, {city : city.toString()}, {headers: city.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }

  updatePassword(password): Observable<User> {
    console.log(password);
    const url = `${this.apiURL}/updatePassword`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.post<User>(url, {password : password.toString()}, {headers: this.headers})
      .map(res => {
        return res;
      })
      .catch(this.handleError);
  }
/*
  addPic(picture): Observable<User> {
    const url = `${this.apiURL}/newPic`;
    console.log(url);
    console.log('headerProfile1:', this.headers);
    return this.http.post(url, picture, {headers: this.headers})
      .map(pic => {
        console.log('headerProfile2:' , this.headers);
        return pic;
      });
  }
  */





  private handleError(error: any): Promise<any> { // errores del http
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
