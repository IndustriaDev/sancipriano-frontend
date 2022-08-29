import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-turista-detalle',
  templateUrl: './turista-detalle.page.html',
  styleUrls: ['./turista-detalle.page.scss'],
})
export class TuristaDetallePage implements OnInit {

  public turista: Usuario;

  public turistaSubscription = new Subscription();

  public id: string;

  constructor(private router: Router, 
              private activateRoute: ActivatedRoute,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.turistaSubscription = this.usuarioService.getUsuario$().subscribe((response: Usuario)=> {
      this.turista = response;
    });

    this.getTurista(this.id);
  }

  getTurista(id: string) {
    this.usuarioService.getUsuario(id).subscribe((response: Usuario)=> {
    });
  }
  
}
