import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title= "Users";
  constructor() { }

  ngOnInit() {
    console.log("users component on init ran!");
  }

}
