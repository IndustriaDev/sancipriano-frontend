import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-taquillero-detalle',
  templateUrl: './taquillero-detalle.page.html',
  styleUrls: ['./taquillero-detalle.page.scss'],
})
export class TaquilleroDetallePage implements OnInit {

  public taquillero: Usuario;

  public taquilleroSubscription = new Subscription();

  public id: string;


  constructor(private router: Router, 
              private activateRoute: ActivatedRoute,
              private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.taquilleroSubscription = this.usuarioService.getUsuario$().subscribe((response: Usuario)=> {
      this.taquillero = response;
    });

    this.getTaquillero(this.id);
  }
  
  getTaquillero(id: string) {
    this.usuarioService.getUsuario(this.id).subscribe((response: Usuario)=> {
    });
  }

}
