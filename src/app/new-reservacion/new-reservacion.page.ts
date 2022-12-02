import { Component, OnInit } from '@angular/core';
import { Reservacion } from '../models/reservacion';
import { ReservacionService } from '../services/reservacion.service';
import { FormGroup,FormBuilder,Validators, RequiredValidator,   } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-reservacion',
  templateUrl: './new-reservacion.page.html',
  styleUrls: ['./new-reservacion.page.scss'],
})
export class NewReservacionPage implements OnInit {

  public reservacion: Reservacion;
  public valMessage!: object;
  public resForm!:FormGroup;
  public date!:Date;
  public date1!:Date;
  public dateS!:string;
  constructor(private reserService: ReservacionService, private fb:FormBuilder) {
    this.reservacion={
      nombre:"",
      fecha: new Date(""),
      telefono:"",
      monto:""
    }
   }

  ngOnInit() {
    //this.dateS = this.dp.transform(this.date,'YYYY-MM-dd')

    /*Tal vez falte el formulario pero se puede construir facil, trato de dejar todo hecho, 
    hubo unos errores fatales en el proyecto que tomaron gran parte de la hora para que corriera, disculpas */

    this.resForm =  this.fb.group({
      fechaF:['',Validators.compose([
        Validators.required
      ])]/* ,
      alberca:[0,Validators.compose([
        Validators.required,
      ])],
      brincolin:[false,Validators.compose([
        Validators.required
      ])],
      mesa:[false,Validators.compose([
        Validators.required
      ])],
      futbol:[false,Validators.compose([
        Validators.required
      ])], */

    });

    /* ,
      alberca:[
        {type:'required',message:'Selección de alberca obligatoria'}
      ],
      brincolin:[
        {type:'required',message:'Fecha obligatoria'}
      ],
      mesa:[
        {type:'required',message:'Fecha obligatoria'}
      ],
      futbol:[
        {type:'required',message:'Fecha obligatoria'}
      ], */
    
  }

}
