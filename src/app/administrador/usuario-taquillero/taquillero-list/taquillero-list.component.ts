import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-taquillero-list',
  templateUrl: './taquillero-list.component.html',
  styleUrls: ['./taquillero-list.component.scss'],
})
export class TaquilleroListComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public usuario: Usuario;
  public usuarioSubscription = new Subscription();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioSubscription = this.usuarioService.all$().subscribe((res: Usuario[])=> {
      this.usuarios = res;
    });
    this.getUsuario();
  }
  getUsuario() {
    this.usuarioService.all().subscribe((res)=> {
    });
  }

}
