import { Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './authService';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

   intercept(request: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {

    console.log('INTERCEPT!!!!!! ');
    // Get the auth header from the service
    let authHeader = this.auth.getToken();
    console.log('authHeader', authHeader);
     // Clone the request to add the new header
     if (authHeader === null) {
        authHeader = 'MAGIC_TOKEN';
     }
     const authReq = request.clone({
       headers: request.headers.set('Authorization', authHeader)
     });
     // Pass on the cloned request instead of the original request.
     /* const dupRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });*/
    // change the URL and replace 'http://' with 'https://'
    // const secureReq = request.clone({url: request.url.replace('http://', 'https://')});
     console.log('authReq: ', authReq);
    return next.handle(authReq);
   }

}
