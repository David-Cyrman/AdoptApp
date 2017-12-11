import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public title: String;
  public user: User;
  public identity;
  public token;
  public status: String;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {

    this.title = "Login";
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');

  }

  ngOnInit() {
    //console.log("Login.component cargado")
    //console.log(localStorage.getItem('identity'));
    // console.log(localStorage.getItem('token'));

    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit() {
    //console.log(this.user);
    // log al usuario y conseguir el objeto

    this._userService.signup(this.user).subscribe(

      response => {
        this.identity = response.user;

        if (!this.identity || !this.identity._id) {
          alert('El usuario no inicio session correctamente');
        } else {
          //Mostrar identity
          this.identity.Password = '';
          //console.log(this.identity);
          localStorage.setItem('identity', JSON.stringify(this.identity));



          //conseguir el token
          this._userService.signup(this.user, true).subscribe(

            response => {
              this.token = response.token;

              if (this.token.lenght <= 0) {
                alert('El token no se ha generado');
              } else {
                //mostrar token
                //console.log(this.token);
                localStorage.setItem('token', this.token);
                this.status = "Success";

                this._router.navigate(['/']);
              }
            },
            error => {
              console.log(<any>error);
            }

          );
        }
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          var body = JSON.parse(error._body);
          this.status = 'Error';
        }
      }

    );

  }

}
