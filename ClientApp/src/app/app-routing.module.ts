import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MascotaListComponent} from './mascota-list/mascota-list.component';
import {MascotaAddComponent} from './mascota-add/mascota-add.component';
import {AdopcionAddComponent} from './adopcion-add/adopcion-add.component';
import {AdopcionListComponent} from './adopcion-list/adopcion-list.component';
import{Routes, RouterModule} from '@angular/router';
import { from } from 'rxjs';


const routes: Routes=[
  {
    path:'mascotalist',
    component: MascotaListComponent,
  },
  {
    path:'mascotaadd',
    component: MascotaAddComponent,
  },

  {
     path:'adopcionadd',
     component: AdopcionAddComponent,
  },

  {
    path: ' adopcionlist',
    component: AdopcionListComponent, 
  },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
