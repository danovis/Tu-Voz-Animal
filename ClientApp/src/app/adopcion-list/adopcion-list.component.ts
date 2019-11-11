import { Component, OnInit } from '@angular/core';
import {Adopcion} from '../models/adopcion';
import {AdopcionService} from '../services/adopcion.service';



@Component({
  selector: 'app-adopcion-list',
  templateUrl: './adopcion-list.component.html',
  styleUrls: ['./adopcion-list.component.css']
})
export class AdopcionListComponent implements OnInit {
  adopcions :Adopcion[];
  constructor(private adopcionservice:AdopcionService) { }

  ngOnInit() {
    this.getAll();

  }

  getAll(){
    this.adopcionservice.getAll().subscribe(adopcions=> this.adopcions=adopcions);
  }
  
}
