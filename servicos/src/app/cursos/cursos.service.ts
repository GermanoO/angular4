import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from './../shared/log.service';

@Injectable() 
export class CursosService {

    private _cursos: string[] = ['Angular 5', 'Angular js', 'React'];

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    constructor(private _logService: LogService) {
        console.log('CursosService');
    }

    getCursos() {
        //return ['Angular 5', 'Angular js', 'React'];
        this._logService.consoleLog('Obtendo lista de cursos');
        return this._cursos;
    }

    addCurso(curso:string) {
        this._logService.consoleLog(`Criando um novo Curso ${curso}`);
        this._cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}