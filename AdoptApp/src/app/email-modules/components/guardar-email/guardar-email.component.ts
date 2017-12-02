import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.html',
})


export class GuardarEmailComponent  {
  title = 'Guardar email';

  //propiedades
  emailContacto: string;

  //funciones del email

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}

