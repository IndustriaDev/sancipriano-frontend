import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-turista-list',
  templateUrl: './turista-list.component.html',
  styleUrls: ['./turista-list.component.scss'],
})
export class TuristaListComponent implements OnInit {

  public turistas: Usuario[] = [];
  public turista: Usuario;
  public turistaSubscription = new Subscription();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.turistaSubscription = this.usuarioService.allTuristas$().subscribe((res: Usuario[])=> {
      this.turistas = res;
    });
    this.getTurista();
  }
  getTurista() {
    this.usuarioService.allTuristas().subscribe((res)=> {
    });
  }
}
