import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'main-email',
    templateUrl: './main-email.html'
})


export class MainEmailComponent implements OnInit {
    title = 'Modulo de emails';

    ngOnInit(){
        console.log("componente main de modulo email cargado");
    }
}
