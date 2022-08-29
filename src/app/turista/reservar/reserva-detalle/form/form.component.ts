import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ReservaService } from '../../../../services/reserva.service';
import { Router } from '@angular/router';
import { Reserva } from '../../../../models/reserva';
import { Usuario } from '../../../../models/usuario';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() reservaItem: Reserva;

  public reservaForm: FormGroup;
  public reserva: Reserva;
  public usuario: Usuario;

  constructor(private reservaService: ReservaService, private router: Router) { }

  ngOnInit() {

    this.reservaForm = new FormGroup({
      fecha: new FormControl({value: this.reservaItem.fecha, disabled: true}, [],),
      cupo: new FormControl({value: this.reservaItem.cupo, disabled: true}, []),
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
    });
  }

  save() {
    this.usuario = new Usuario();
    this.usuario.nombres = this.reservaForm.get('nombres').value;
    this.usuario.apellidos = this.reservaForm.get('apellidos').value;
    this.usuario.identificacion = this.reservaForm.get('identificacion').value;
    this.usuario.telefono = this.reservaForm.get('telefono').value;
    this.usuario.correo = this.reservaForm.get('correo').value;
    this.reserva = new Reserva();
    this.reserva.turistas.push(this.usuario);
    console.log(this.reserva);
    this.reservaService.updateReserva(this.reservaItem.id, this.reserva).subscribe(response => {
      this.reservaForm.reset();
      this.router.navigate(['/turista/reservar'], {skipLocationChange:true});
    }, err => {
      console.log(err);
    });
  }

}
