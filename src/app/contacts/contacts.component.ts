import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';
import {User} from '../user';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  sub: any;
  token: any;
  user: User;

  constructor (
    private route: ActivatedRoute, private userService: UserService) {
    // this.user = new User();
  }


  ngOnInit() {/*
    console.log('inside Profile component');

    this.userService.profile().subscribe(res => {
      this.user = res[0];
      //  this.user = res;
      console.log('Welcome to :', this.user);
    }, error => {
      console.log('Error al mostrar Perfil de User:' + error);
    });*/
  }
  /* ngOnDestroy() {
   this.sub.unsubscribe();
   }*/
}
