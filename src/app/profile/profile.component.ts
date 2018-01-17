import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  sex = ['man', 'woman', 'other'];

}
