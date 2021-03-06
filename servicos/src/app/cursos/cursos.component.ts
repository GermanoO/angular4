import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursosService: CursosService

  cursos: string[] = [];

  constructor(private _cursosService: CursosService) { 
    //this.cursosService = new CursosService;
    //this.cursosService = _cursosService; 
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      
      //curso => console.log(curso)
      curso => this.cursos.push(curso)

      /* function(curso){
        console.log(curso);
      } */
    );

  }

}
