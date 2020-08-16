import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
  inputs: ['title','goRoute','type'],
})
export class HeaderBackComponent implements OnInit {
  title: string | 'Unal Glucose';
  goRoute: string | null = null;
  type: string | null = null;
  constructor(
    private router: Router,
    private _location: Location
  ) { }

  ngOnInit() {}
  goBack() {
    // console.log(this.goRoute+this.type);
    if(this.type == 'route' && this.goRoute) {
      this.router.navigate([this.goRoute], { queryParams: {  }, skipLocationChange: false });
    } else if (this.type == 'back' ) {
      this._location.back();
    } else {
      this._location.back();
    }
  }

}
