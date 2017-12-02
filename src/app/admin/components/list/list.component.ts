import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
    selector: 'admin-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    title = 'List';
    numbers = new Array(10);
}

