import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';
import { GLOBAL } from '../../Services/global';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
})
export class RegistroComponent implements OnInit {

  public title: String;
  public user: User;
  public status: String;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {

    this.title = "Registro";
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    console.log("Registro.component cargado");
  }

  onSubmit(registerForm) {
    this._userService.registro(this.user).subscribe(

      response => {
        //console.log(response.user._id);
        if (response.user && response.user._id) {
         // this.user = response.user;
          this.status = 'Success';
          this.user = new User('', '', '', '', '', 'ROLE_USER', '');
          registerForm.reset();
        } else {
          this.status = 'Error';
        }

        

      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
