import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../../models/reserva';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-item',
  templateUrl: './reserva-item.component.html',
  styleUrls: ['./reserva-item.component.scss'],
})
export class ReservaItemComponent implements OnInit {

  @Input() reserva: Reserva;

  constructor(private route: Router) { }

  ngOnInit() {}

  buttonClick(id: number) {
    this.route.navigate(['/guides-detail/'+id]);
  }

}
