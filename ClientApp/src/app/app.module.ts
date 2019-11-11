import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MascotaAddComponent } from './mascota-add/mascota-add.component';
import { AdopcionAddComponent } from './adopcion-add/adopcion-add.component';
import { AdopcionListComponent } from './adopcion-list/adopcion-list.component';
import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MascotaAddComponent,
    AdopcionAddComponent,
    AdopcionListComponent,
    MascotaListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {
        path:'mascotalist',
        component: MascotaListComponent,
      },
      {
        path:'mascotaadd',
        component: MascotaAddComponent,
      },
      { path: 'adopcionadd',
       component: AdopcionAddComponent,
        
      },
      {
        path: 'adopcionlist',
        component: AdopcionListComponent,

      },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
