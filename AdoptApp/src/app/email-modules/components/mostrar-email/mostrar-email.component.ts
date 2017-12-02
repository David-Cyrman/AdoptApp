import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.html'
})


export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar email';

  //propiedades
  emailContacto: string;

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}


