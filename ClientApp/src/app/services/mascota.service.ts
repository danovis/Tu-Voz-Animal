import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Mascota} from '../models/mascota';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ){}

 /*  addMascota(mascota: Mascota): Observable<Mascota>{
    return this.http.post<Mascota>(this.baseUrl+ 'api/Mascota', mascota, httpOptions).pipe(
      tap((newMascota: Mascota)=> this.log(`added Newmascota w/ nombre= ${newMascota.nombre}`)),
      catchError(this.handleError<Mascota>('addMascota'))
    );
  } */

   /**POST: add a new task to the server */
   addMascota(mascota: Mascota): Observable<Mascota>{
    return this.http.post<Mascota>(this.baseUrl + 'api/mascota', mascota, httpOptions).pipe(
      tap((newMascota: Mascota)=> this.log(`added NewMascota w/ nombre= ${newMascota.nombre}`)),
      catchError(this.handleError<Mascota>('addMascota'))
    );
  }

  getAll():Observable<Mascota[]>{
    return this.http.get<Mascota[]>(this.baseUrl+'api/Mascota')
    .pipe(
    tap(_=>this.log('fetched Mascota')),
    catchError(this.handleError<Mascota[]>('getAll',[]))
    );
    }

    get(nombre: string): Observable<Mascota> {

      const url =`${this.baseUrl + 'api/Mascota'}/${nombre}`;
      return this.http.get<Mascota>(url).pipe(
      tap(_ => this.log(`fetched Mascota nombre=${nombre}`)),
      catchError(this.handleError<Mascota>(`get nombre=${nombre}`))
      );
      }

      update (mascota: Mascota): Observable<any> {
        const url =`${this.baseUrl + 'api/Mascota'}/${mascota.nombre}`;
        return this.http.put(url, mascota, httpOptions).pipe(
        tap(_ => this.log(`updated mascota nombre=${mascota.nombre}`)),
        catchError(this.handleError<any>('mascota'))
        );
        }

        delete (mascota: Mascota | number): Observable<Mascota> {
          const codigo = typeof mascota === 'number' ? mascota : mascota.nombre;
          const url =`${this.baseUrl + 'api/Mascota'}/${codigo}`;
          return this.http.delete<Mascota>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted mascota codigo=${codigo}`)),
          catchError(this.handleError<Mascota>('deleteMascota'))
          );
          }

          
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
    };
    }

    private log(message: string) {
      alert(`MascotaService: ${message}`);
      }
}
