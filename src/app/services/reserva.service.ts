import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reserva } from '../models/reserva';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  public url = environment.url;

  public reservas$ = new Subject<Reserva[]>();
  public reserva$ = new Subject<Reserva>();
  public reservas: Reserva[] = [];
  public reserva: Reserva;

  constructor(private http: HttpClient) { }
  
  public all$(): Observable<Reserva[]> {
    return this.reservas$.asObservable();
  }

  public getReserva$(): Observable<Reserva> {
    return this.reserva$.asObservable();
  }
  public getReserva(id: number): Observable<any> {
    return this.http.get<Reserva>(this.url + '/reservas/' + id)
    .pipe(
      map((response: any) => {
        this.reserva = new Reserva();
        this.reserva.setReserva(response);
        this.reserva$.next(this.reserva);
      })
    );
  }

  public all(): Observable<any> {
    this.reservas = [];
    return this.http.get<Reserva[]>(this.url + '/reservas')
      .pipe(
        map((res: any[]) => {
          res.forEach((item: any) => {
            this.reserva = new Reserva();
            this.reserva.setReserva(item);
            this.reservas.push(this.reserva);
          });
          this.reservas$.next(this.reservas);
        })
      );
  }

  public postReserva(reserva: Reserva) {
    return this.http.post<Reserva>(this.url+'/reservas', reserva)
    .pipe(
      map((response: any) => {
        this.reserva = new Reserva();
        this.reserva.setReserva(response);
        this.reserva$.next(this.reserva);
      })
    );
  }

  public updateReserva(id: number, reserva: any) {
    return this.http.put<Reserva>(this.url+'/reservas/'+id, reserva)
    .pipe(
      map((response: any) => {
        this.reserva = new Reserva();
        this.reserva.setReserva(response);
        this.reserva$.next(this.reserva);
      })
    );
  }

}
