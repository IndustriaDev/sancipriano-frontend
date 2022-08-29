import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-turista-item',
  templateUrl: './turista-item.component.html',
  styleUrls: ['./turista-item.component.scss'],
})
export class TuristaItemComponent implements OnInit {

  @Input() turista: Usuario;

  constructor() { }

  ngOnInit() {}

  buttonClick(id: string) {
  }
}
