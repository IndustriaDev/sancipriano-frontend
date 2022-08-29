import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-turista',
  templateUrl: './menu-turista.component.html',
  styleUrls: ['./menu-turista.component.scss'],
})
export class MenuTuristaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onRegistrarTurista(){
    this.router.navigate(['/turista/registrarse']);
  }

  onReservaTurista() {
    this.router.navigate(['/turista/reservar']);
  }
}
