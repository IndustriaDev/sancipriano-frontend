import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-taquillero',
  templateUrl: './usuario-taquillero.page.html',
  styleUrls: ['./usuario-taquillero.page.scss'],
})
export class UsuarioTaquilleroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateTaquillero() {
    this.router.navigate(['/administrador/usuario-taquillero/taquillero-nuevo'], {skipLocationChange: true});
  }
}
