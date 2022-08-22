import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.scss'],
})
export class UsuarioItemComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor(private route: Router) { }

  ngOnInit() {}

  buttonClick(id: string){
    this.route.navigate(['/usuario-detalle/'+id]);
  }

}
