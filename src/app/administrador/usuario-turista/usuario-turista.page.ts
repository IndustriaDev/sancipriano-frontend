import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-turista',
  templateUrl: './usuario-turista.page.html',
  styleUrls: ['./usuario-turista.page.scss'],
})
export class UsuarioTuristaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateTurista() {
    this.router.navigate(['/administrador/usuario-turista/turista-nuevo'], {skipLocationChange: true});
  }

}
