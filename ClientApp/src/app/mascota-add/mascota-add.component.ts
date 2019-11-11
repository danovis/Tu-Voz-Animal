import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../services/mascota.service';
import { Mascota } from '../models/mascota';

@Component({
  selector: 'app-mascota-add',
  templateUrl: './mascota-add.component.html',
  styleUrls: ['./mascota-add.component.css']
})
export class MascotaAddComponent implements OnInit {
  mascota : Mascota;
  
  constructor( private mascotaService: MascotaService ) { }

  ngOnInit() {
    this.mascota = {nombre : "", sexo: "", raza:"", tipomascota: "", descripcion:""}
  }

  add() {
    this.mascotaService.addMascota(this.mascota)
    .subscribe(newMascota => {
    alert('Se agrego una nueva mascota'+JSON.stringify(newMascota.nombre))
    });
    }

}
