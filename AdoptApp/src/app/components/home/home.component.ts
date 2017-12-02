import { Component, OnInit } from '@angular/core';
//declare var JQuery: any; es necesario hace esto para que acepte los comandos de jquery y ademas el $ sign
//declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Home";

  constructor() { }

  ngOnInit() {
    console.log("home.component On init ran!");

    //  jquery (considerado no recomendado en angular apps)
    //  $('#textojq').hide();
    //  $('#botonjq').click(function () {
    //    $('#textojq').toggle();
    //  });

  }

}
