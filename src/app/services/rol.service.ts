import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rol } from '../models/rol';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  public url = environment.url;

  public roles$ = new Subject<Rol[]>();
  public rol$ = new Subject<Rol>();
  public roles: Rol[] = [];
  public rol: Rol;

  constructor(private http: HttpClient) { }

  public taquillero$(): Observable<Rol[]> {
    return this.roles$.asObservable();
  }

  public taquillero(): Observable<any> {
    this.roles = [];
    return this.http.get<Rol[]>(this.url + '/rols')
      .pipe(
        map((res: any[]) => {
          res.forEach((item: any) => {
            this.rol = new Rol();
            this.rol.setRol(item);
            if (this.rol.nombre === "taquillero") {
              this.roles.push(this.rol);
            }
          });
          this.roles$.next(this.roles);
        })
      );
  }

  public turista$(): Observable<Rol[]> {
    return this.roles$.asObservable();
  }

  public turista(): Observable<any> {
    this.roles = [];
    return this.http.get<Rol[]>(this.url + '/rols')
      .pipe(
        map((res: any[]) => {
          res.forEach((item: any) => {
            this.rol = new Rol();
            this.rol.setRol(item);
            if (this.rol.nombre === 'turista') {
              this.roles.push(this.rol);
            }
          });
          this.roles$.next(this.roles);
        })
      );
  }
}
