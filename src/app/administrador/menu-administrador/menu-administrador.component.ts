import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.scss'],
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onUsuarioTaquillero(){
    this.router.navigate(['/administrador/usuario-taquillero']);
  }

  onUsuarioTurista(){
    this.router.navigate(['/administrador/usuario-turista']);
  }

  onAdminReserva(){
    this.router.navigate(['/administrador/admin-reserva']);
  }
}
