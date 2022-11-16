import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../services/validaciones.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formulario!: FormGroup;
  public submitted = false;
  public emailValid = false;
  public okButton = false;

  public nuevo!: any;



  constructor(
    private contactService:ContactService,private formBuiler: FormBuilder,
    private validacionesService:ValidacionesService,
    ) { }
  
  get contactos (){
    return this.contactService._contact;
  }


  ngOnInit(): void {
    this.init();
    this.iniciarFormularios(); 
  }

  init(){
    this.nuevo = {
      usuario:{
        name:'',
        email:''
      },
      contacto:{
        asunto:'',
        mensaje:''
      }
    };
  }

  iniciarFormularios() {
    this.formulario = this.formBuiler.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      mensaje: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  validarLetras(event: any) {
    return this.validacionesService.validateLetters(event);
  }

  validarAlfaNumerico(event: any) {
    return this.validacionesService.validateAphaNumeric(event);
  }

  validarCorreo(event: any) {
    this.emailValid = this.validacionesService.validarEmail(event);
  }

  guardarDatos(){
    this.submitted = true; 
    const form = this.formulario.value;

    if(this.formulario.valid){
      this.submitted = false;  this.okButton = true;

      const json = this.miJson(form);
      this.guardarContact(json); 
    }else{
      alert("formulario invalido");
      this.okButton = true;
    }    

  }

  miJson(json:any):any{
    this.nuevo = {
      usuario:{
        name:json.name,
        email:json.email
      },
      contacto:{
        asunto:json.asunto,
        mensaje:json.mensaje
      }
    };
    return this.nuevo; 
  }

  guardarContact(json:any){
    this.contactService.save(json).subscribe( (res:any) =>{
      if(res.status){
        alert(res.mensaje);
        this.init();
        this.formulario.reset();
      }else{
        alert(res.mensaje);
        this.init();
        this.formulario.reset();
      }
    });
  }

  get f() {
    return this.formulario.controls;
  }

  // saveContact(){
  //   let name = this.nuevo.usuario.name.trim().length === 0;
  //   let email = this.nuevo.usuario.email.trim().length === 0;
  //   let asunto = this.nuevo.contacto.asunto.trim().length === 0;
  //   let mensaje = this.nuevo.contacto.mensaje.trim().length === 0;

  //   if( name || email || asunto || mensaje){
  //      return; 
  //   }

  //   console.log(this.nuevo);
  //   //this.guardarContact(this.nuevo); 
  // }

  



}
