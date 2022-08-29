import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from '../../../models/reserva';
import { Subscription } from 'rxjs';
import { ReservaService } from '../../../services/reserva.service';

@Component({
  selector: 'app-reserva-detalle',
  templateUrl: './reserva-detalle.page.html',
  styleUrls: ['./reserva-detalle.page.scss'],
})
export class ReservaDetallePage implements OnInit {

  public reserva: Reserva;

  public reservaSubscription = new Subscription();

  public id: string;

  constructor(private activatedRoute: ActivatedRoute, private reservaService: ReservaService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.reservaSubscription = this.reservaService.getReserva$().subscribe((response: Reserva)=> {
      this.reserva = response;
    });

    this.getReserva(this.id);
  }

  getReserva(id: string) {
    this.reservaService.getReserva(id).subscribe((response: Reserva)=> {
    });
  }

}
