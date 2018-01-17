import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable()
export class AddService {

  constructor(private _http: HttpClient) { }

  addProduct(newpic) {
    return this._http.post('/api/newpicture', newpic).map((pic: Response) => pic.json()).toPromise();
  }
}
