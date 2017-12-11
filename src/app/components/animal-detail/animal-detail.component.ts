import { Component, DoCheck, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Animal } from '../../models/animal';
import { User } from '../../models/user';

import { GLOBAL } from '../../Services/global';

import { AnimalService } from '../../Services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
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
  ) {

    this.title = "Detalle de mascotas";
    this.url = GLOBAL.url
  }

  ngOnInit() {
    this.getAnimal();
  }

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {
          if (!response.animal) {
            this._router.navigate(['/home']);
          } else {
            this.animal = response.animal
          }

        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home']);
        }
      )

    });
  }

}
