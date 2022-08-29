import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-taquillero-card',
  templateUrl: './taquillero-card.component.html',
  styleUrls: ['./taquillero-card.component.scss'],
})
export class TaquilleroCardComponent implements OnInit {

  @Input() taquillero: Usuario;

  constructor() { }

  ngOnInit() {}

}
