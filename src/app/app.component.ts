import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'Dashboard';

    //propiedades
    emailContacto: string;

  ngDoCheck(){
    //console.log('Do check runned!');
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
    //console.log(localStorage.getItem('emailContacto'));
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto= null;
  }
  
}

