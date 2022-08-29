import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-reserva',
  templateUrl: './admin-reserva.page.html',
  styleUrls: ['./admin-reserva.page.scss'],
})
export class AdminReservaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCreateReserva(){
    console.log('Create Reserva');
  }

}
