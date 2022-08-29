import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taquillero-item',
  templateUrl: './taquillero-item.component.html',
  styleUrls: ['./taquillero-item.component.scss'],
})
export class TaquilleroItemComponent implements OnInit {

  @Input() taquillero: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {}

  buttonClickTaquillero(id: string) {
    this.router.navigate(['/administrador/usuario-taquillero/taquillero-detalle', id], {skipLocationChange: true});
  }

}
