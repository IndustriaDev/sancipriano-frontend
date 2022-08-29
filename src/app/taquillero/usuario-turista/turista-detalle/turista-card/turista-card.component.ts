import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-turista-card',
  templateUrl: './turista-card.component.html',
  styleUrls: ['./turista-card.component.scss'],
})
export class TuristaCardComponent implements OnInit {

  @Input() turista: Usuario;

  constructor() { }

  ngOnInit() {}

}
