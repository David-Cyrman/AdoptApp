import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { Animal } from '../../../models/animal';
import { User } from '../../../models/user';

import { GLOBAL } from '../../../Services/global';

import { AnimalService } from '../../../Services/animal.service';
import { UserService } from '../../../Services/user.service';
import { uploadService } from '../../../Services/upload.service';



@Component({
    selector: 'admin-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    providers: [AnimalService, uploadService, UserService]
})

export class AddComponent implements OnInit {
    public title: String;
    public url: String;
    public animal: Animal;
    public identity;
    public token;
    public status;


    constructor(
        private _animalService: AnimalService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _uploadService: uploadService
    ) {

        this.title = "Registro Mascota";
        this.animal = new Animal('', '', '', 2017, 'basic.jpg', false, '', '');
        this.url = GLOBAL.url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }

    ngOnInit() {
        console.log("add.component cargado!");
    }

    onSubmit() {
        console.log(this.animal);
        this._animalService.addAnimal(this.token, this.animal).subscribe(

            response => {
                //tecnicamente deberia ser si !response.animal no existe 
                if (response.animal) {
                    this.status = 'Error';
                } else {

                    this.status = 'Success';
                    this.animal = response.animal;

                    //subir la imagen del animal
                    if (!this.filesToUpload) {
                        this._router.navigate(['/admin-panel/list']);
                    } else {
                        this._uploadService.makeFileRequest(this.url + 'upload-Image-Animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
                            .then((result: any) => {
                                //console.log(this.animal);
                                this.animal.Image = result.Image;
                                this._router.navigate(['/admin-panel/list']);
                            });


                    }
                }
            },

            error => {
                var errorMessage = <any>error;

                if (errorMessage != null) {
                    this.status = "Error";

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

