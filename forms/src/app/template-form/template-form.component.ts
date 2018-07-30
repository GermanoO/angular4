import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') f:NgForm

  usuario: any = {
    nome: null,
    email: null,
    idade: null
  }

  constructor() { }

  onSubmit(form){
    console.log(form)
   // console.log(this.usuario)
  }

  ngOnInit() {
  }

  verificaIdade(formData: any){
    if(this.usuario.idade > 99){
      console.log(this.usuario.idade)
      //return !templateAtt.valid && templateAtt.touched
      formData.form.controls['idade'].setErrors({'incorrect': true})
      return true
    }
  }

}
