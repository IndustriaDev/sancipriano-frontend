import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-taquillero',
  templateUrl: './menu-taquillero.component.html',
  styleUrls: ['./menu-taquillero.component.scss'],
})
export class MenuTaquilleroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onTurista() { 
    this.router.navigate(['/taquillero/usuario-turista']);
  }

  onReserva() { 
    this.router.navigate(['/taquillero/turista-detalle']);
  }

}
