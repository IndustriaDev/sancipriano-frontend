import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../../../models/reserva';

@Component({
  selector: 'app-reserva-item',
  templateUrl: './reserva-item.component.html',
  styleUrls: ['./reserva-item.component.scss'],
})
export class ReservaItemComponent implements OnInit {

  @Input() reserva: Reserva;

  constructor() { }

  ngOnInit() {}

  buttonClick(id: string) {
  }
}
