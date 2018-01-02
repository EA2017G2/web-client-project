import {Injectable} from '@angular/core';
 // import jwt_decode from 'jwt-decode';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  public  getToken(): string {

    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get Token
    const token = this.getToken();
    // return a boolean
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }

}
