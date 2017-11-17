import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  sub: any;
  token: any;
  constructor (
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.token = +params['token'] || 0;
      });
    console.log(this.token);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
