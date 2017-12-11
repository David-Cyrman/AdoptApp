import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Animal } from '../../../models/animal';
import { User } from '../../../models/user';

import { GLOBAL } from '../../../Services/global';

import { AnimalService } from '../../../Services/animal.service';
import { UserService } from '../../../Services/user.service';
import { uploadService } from '../../../Services/upload.service';



@Component({
    selector: 'admin-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers: [AnimalService]
})
export class ListComponent implements OnInit {
   // public numbers = new Array(10);
    public title: String;
    public url: String;
    public animal: Animal;
    public animals: Animal[];
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
        this.title = "Listado de mascotas";
       
    }

    ngOnInit(){
        this._animalService.getAnimals().subscribe(
            response =>{
                if(!response.animals){

                }else{
                    this.animals = response.animals
                }
            },
            error =>{
                console.log(<any>error);
            }
        );
    }
}


