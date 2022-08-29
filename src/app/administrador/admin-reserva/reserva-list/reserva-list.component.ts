import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../models/reserva';
import { Subscription } from 'rxjs';
import { ReservaService } from '../../../services/reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.scss'],
})
export class ReservaListComponent implements OnInit {

  public reservas: Reserva[] = [];
  public reserva: Reserva;
  public reservaSubscription = new Subscription();

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.reservaSubscription = this.reservaService.all$().subscribe((res: Reserva[])=> {
      this.reservas = res;
    });
    this.getReserva();
  }
  getReserva() {
    this.reservaService.all().subscribe((res)=> {
    });
  }
}
