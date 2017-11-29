import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title= "Contact";

  //propiedades
  emailContacto: string;
  
  constructor() { }

  ngOnInit() {
    console.log("contact componenet on init ran!");
  }

  guardarEmail(){
    //console.log(this.emailContacto);

    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));

  }

}
