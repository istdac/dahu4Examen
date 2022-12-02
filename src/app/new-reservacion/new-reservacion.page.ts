import { Component, OnInit } from '@angular/core';
import { Reservacion } from '../models/reservacion';
import { ReservacionService } from '../services/reservacion.service';
import { FormGroup,FormBuilder,Validators, RequiredValidator,   } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-reservacion',
  templateUrl: './new-reservacion.page.html',
  styleUrls: ['./new-reservacion.page.scss'],
})
export class NewReservacionPage implements OnInit {

  public reservacion: Reservacion;
  public valMessage!: Object;
  public resForm!:FormGroup;
  public date!:Date;
  public date1!:Date;
  public dateS!:string;
  constructor(private reserService: ReservacionService, private fb:FormBuilder,private dp:DatePipe) {
    this.reservacion={
      nombre:"",
      fecha:Date(),
      telefono:"",
      monto:""
    }
   }

  ngOnInit() {
    this.date1 = new Date();
    this.date.setDate(this.date1.getDate()+1)
    this.dateS = this.dp.transform(this.date1,'YYYY-MM-dd')

    /*Tal vez falte el formulario pero se puede construir facil, trato de dejar todo hecho, 
    hubo unos errores fatales en el proyecto que tomaron gran parte de la hora para que corriera, disculpas */

    this.resForm =  this.fb.group({
      fecha:['',Validators.compose([
        Validators.required
      ])],
      alberca:['',Validators.compose([
        Validators.required
      ])],
      brincolin:['',Validators.compose([
        Validators.required
      ])],
      mesa:['',Validators.compose([
        Validators.required
      ])],
      futbol:['',Validators.compose([
        Validators.required
      ])],

    });

    this.valMessage={
      fecha:[
        {type:'required',message:'Fecha obligatoria'}
      ],
      alberca:[
        {type:'required',message:'Selección de alberca obligatoria'}
      ],
      fecha:[
        {type:'required',message:'Fecha obligatoria'}
      ],
      fecha:[
        {type:'required',message:'Fecha obligatoria'}
      ],
    }
  }

}
