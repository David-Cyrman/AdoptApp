import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { Router } from '@angular/router';
// import { last } from '@angular/router/src/utils/collection';

import { GLOBAL } from './Services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity;
  // public token
  public url: string;

  constructor(private _userService: UserService, private _router: Router) {

    this.title = 'AdoptApp';
    this.url = GLOBAL.url;

  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  Logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/home']);
  }

}

