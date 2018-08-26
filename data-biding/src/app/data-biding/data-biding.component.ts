import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular =  true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  getCurtirCurso() {
    return true;
  }

  getValor() {
    return 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
