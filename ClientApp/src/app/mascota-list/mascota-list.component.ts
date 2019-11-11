import { Component, OnInit } from '@angular/core';
import {Mascota} from '../models/mascota';
import {MascotaService} from '../services/mascota.service';


@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {
  mascotas :Mascota[];

  constructor(private mascotaservice:MascotaService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.mascotaservice.getAll().subscribe(mascotas=> this.mascotas=mascotas);
  }
}
