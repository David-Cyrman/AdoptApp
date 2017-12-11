import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  title= "Mascotas";
  constructor() { }

  ngOnInit() {
    console.log("pets component on init ran!");
  }

}
