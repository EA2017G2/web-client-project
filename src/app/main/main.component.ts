import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import {User} from '../user';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  sub: any;
  token: any;
  user: User;

  constructor (
    private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    console.log('inside Profile component');
    /*this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
      //  this.token = +params['token'] || 0;
      });
   // console.log('Min Component con Token', this.token);*/
    this.userService.profile().subscribe(res => {
     this.user = res;
    console.log('Profile de:', this.user);
      }, error => {
        console.log('Error al mostrar Perfil de User:' + error);
      });
      }
      /* ngOnDestroy() {
    this.sub.unsubscribe();
  }*/

}
