import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  title= "Adopt";

  constructor() { }

  ngOnInit() {
    console.log("Adopt component on init ran!");
  }

}
