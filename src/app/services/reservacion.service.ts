import { Injectable } from '@angular/core';
import { Reservacion } from '../models/reservacion';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  constructor(private firestore: AngularFirestore) { 

  }

  public getReservaciones(): Observable<Reservacion[]>{
    //Conexión a firestore y return
    return this.firestore.collection('students') //Obtner conexion
      .snapshotChanges() //Obtener snapshot con datos observables y si hay cambios se vuelve a ejecutar. Hace que no tengamos que refrescar la página
      .pipe( //Pipe da el formato para nuestros datos que obtenemos
        map(actions=> {
          return actions.map(a=>{ //a es un objeto que contiene el payload que tiene un doc, el cual tiene data que nos trae la información
            //Firestore separa datos de id
            const data = a.payload.doc.data() as Reservacion;
            const id = a.payload.doc.id;
            //Formato
            return {id, ...data};
          });
        })
      );
  }


}
