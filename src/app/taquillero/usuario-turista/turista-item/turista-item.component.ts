import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turista-item',
  templateUrl: './turista-item.component.html',
  styleUrls: ['./turista-item.component.scss'],
})
export class TuristaItemComponent implements OnInit {

  @Input() turista: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {}

  buttonClick(id: string) {
    this.router.navigate(['/taquillero/usuario-turista/turista-detalle', id], {skipLocationChange: true});
  }
}
