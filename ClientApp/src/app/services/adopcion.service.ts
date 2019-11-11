import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Adopcion} from '../models/adopcion';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class AdopcionService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string ){}

  addAdopcion(adopcion: Adopcion): Observable<Adopcion>{
    return this.http.post<Adopcion>(this.baseUrl+ 'api/adopcion', adopcion, httpOptions).pipe(
      tap((newAdopcion: Adopcion)=> this.log(`added NewAdopcion w/ codpersonna= ${newAdopcion.codpersonna}`)),
      catchError(this.handleError<Adopcion>('addAdopcion'))
    );
  }

  getAll():Observable<Adopcion[]>{
    return this.http.get<Adopcion[]>(this.baseUrl+'api/Adopcion')
    .pipe(
    tap(_=>this.log('fetched Adopcion')),
    catchError(this.handleError<Adopcion[]>('getAll',[]))
    );
    }

    get(codpersonna: string): Observable<Adopcion> {

      const url =`${this.baseUrl + 'api/Adopcion'}/${codpersonna}`;
      return this.http.get<Adopcion>(url).pipe(
      tap(_ => this.log(`fetched Adopcion codigo=${codpersonna}`)),
      catchError(this.handleError<Adopcion>(`get nombre=${codpersonna}`))
      );
      }

      update (adopcion: Adopcion): Observable<any> {
        const url =`${this.baseUrl + 'api/Adopcion'}/${adopcion.codpersonna}`;
        return this.http.put(url, adopcion, httpOptions).pipe(
        tap(_ => this.log(`updated adopcion id=${adopcion.codpersonna}`)),
        catchError(this.handleError<any>('adopcion'))
        );
        }

        delete (adopcion: Adopcion | number): Observable<Adopcion> {
          const codigo = typeof adopcion === 'number' ? adopcion : adopcion.codpersonna;
          const url =`${this.baseUrl + 'api/Adopcion'}/${codigo}`;
          return this.http.delete<Adopcion>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted adopcion codigo=${codigo}`)),
          catchError(this.handleError<Adopcion>('deleteMascota'))
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
      alert(`AdopcionService: ${message}`);
      }
}
