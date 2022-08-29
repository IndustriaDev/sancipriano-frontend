import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../../models/reserva';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservaService } from '../../../../services/reserva.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss'],
})
export class ReservaFormComponent implements OnInit {

  public reservaForm: FormGroup;
  public reserva: Reserva;

  constructor(private reservaService: ReservaService, private router: Router) { }

  ngOnInit() {
    this.reservaForm = new FormGroup({
      fecha: new FormControl('', [Validators.required]),
      cupo: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
    });
  }

  save() {
    this.reserva = new Reserva();
    this.reserva.fecha = this.reservaForm.get("fecha").value;
    this.reserva.cupo = this.reservaForm.get("cupo").value;
    this.reservaService.postReserva(this.reserva).subscribe(response => {
      this.reservaForm.reset();
      this.router.navigate(['/administrador/admin-reserva'], {skipLocationChange:true});
    }, err => {
      console.log(err);
    });
  }

}
