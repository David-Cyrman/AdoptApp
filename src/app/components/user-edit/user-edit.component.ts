import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../Services/global';
import { UserService } from '../../Services/user.service';
import { uploadService } from '../../Services/upload.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [
    UserService,
    uploadService
  ]
})
export class UserEditComponent implements OnInit {

  public title: String;
  public user: User;
  public identity;
  public token;
  public status: string;
  public url: string;

  constructor(private _userService: UserService, private _uploadService: uploadService) {

    this.title = "Actualizar mi informacion";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;

  }

  ngOnInit() {
    //console.log("Edit-User cargado");
  }

  onSubmit() {
    this._userService.updateUser(this.user).subscribe(
      response => {
        if (!response.user) {
          this.status = "Error";
        } else {
          this.status = "Success"
          localStorage.setItem('identity', JSON.stringify(this.user));

          //subida de imagen
          this._uploadService.makeFileRequest(this.url + 'upload-Image-User/' + this.user._id, [], this.filesToUpload, this.token, 'image')
            .then((result: any) => {
               this.user.Image = result.Image;
               localStorage.setItem('identity', JSON.stringify(this.user));
               //console.log(this.user);
            });

        }

      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          this.status = 'Error';
        }
      }

    );
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //console.log(this.filesToUpload);
  }







}
