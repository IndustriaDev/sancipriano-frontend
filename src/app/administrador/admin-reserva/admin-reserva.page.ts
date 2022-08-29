import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-reserva',
  templateUrl: './admin-reserva.page.html',
  styleUrls: ['./admin-reserva.page.scss'],
})
export class AdminReservaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateReserva(){
    this.router.navigate(['/administrador/admin-reserva/reserva-nueva']);
  }

}
