import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homecares',
  templateUrl: './homecares.component.html',
  styleUrls: ['./homecares.component.css']
})
export class HomecaresComponent implements OnInit {

  title= "Albergues";
  constructor() { }

  ngOnInit() {
    console.log("homecares component on init ran!");
  }

}
