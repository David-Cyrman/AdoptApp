import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { identifierName } from '@angular/compiler';

@Injectable()

export class AnimalService {
    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    addAnimal(token, animal_to_register) {
        let params = JSON.stringify(animal_to_register);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + 'animal', params, { headers: headers })
            .map(res => res.json());
    }

    updateAnimal(token, animal_to_update) {
        let params = JSON.stringify(animal_to_update);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'updateAnimal/' + animal_to_update._id, params, { headers: headers })
            .map(res => res.json());
    }

    getAnimals() {
        return this._http.get(this.url + 'animals').map(res => res.json());
    }

    getAnimal(id) {
        return this._http.get(this.url + 'animal/'+id).map(res => res.json());
    }


    deleteAnimal() {

    }



}