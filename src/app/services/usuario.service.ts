import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url = environment.url;

  public usuarios$ = new Subject<Usuario[]>();
  public usuario$ = new Subject<Usuario>();
  public usuarios: Usuario[] = [];
  public usuario: Usuario;

  public turistas$ = new Subject<Usuario[]>();
  public turista$ = new Subject<Usuario>();
  public turistas: Usuario[] = [];
  public turista: Usuario;

  constructor(private http: HttpClient) { }

  public all$(): Observable<Usuario[]> {
    return this.usuarios$.asObservable();
  }

  public allTuristas$(): Observable<Usuario[]> {
    return this.turistas$.asObservable();
  }

  public getUsuario$(): Observable<Usuario> {
    return this.usuario$.asObservable();
  }

  public getUsuario(id: string): Observable<any> {
    return this.http.get<Usuario>(this.url + '/usuarios/' + id)
    .pipe(
      map((response: any) => {
        this.usuario = new Usuario();
        this.usuario.setUsuario(response);
        this.usuario$.next(this.usuario);
      })
    );
  }

  public all(): Observable<any> {
    this.usuarios = [];
    return this.http.get<Usuario[]>(this.url + '/usuarios')
      .pipe(
        map((res: any[]) => {
          res.forEach((item: any) => {
            this.usuario = new Usuario();
            this.usuario.setUsuario(item);
            if (this.usuario.rol.nombre == "taquillero") {
              this.usuarios.push(this.usuario);
            }
          });
          this.usuarios$.next(this.usuarios);
        })
      );
  }

  public allTuristas(): Observable<any> {
    this.turistas = [];
    return this.http.get<Usuario[]>(this.url + '/usuarios')
      .pipe(
        map((res: any[]) => {
          res.forEach((item: any) => {
            this.turista = new Usuario();
            this.turista.setUsuario(item);
            if (this.turista.rol.nombre == "turista") {
              this.turistas.push(this.turista);
            }
          });
          this.turistas$.next(this.turistas);
        })
      );
  }

  public postUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url+'/usuarios', usuario)
    .pipe(
      map((response: any) => {
        this.usuario = new Usuario();
        this.usuario.setUsuario(response);
        this.usuario$.next(this.usuario);
      })
    );
  }

  public updateUsuario(id: number, usuario: any) {
    return this.http.put<Usuario>(this.url+'/usuarios/'+id, usuario)
    .pipe(
      map((response: any) => {
        this.usuario = new Usuario();
        this.usuario.setUsuario(response);
        this.usuario$.next(this.usuario);
      })
    );
  }
}
