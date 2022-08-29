import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../../models/usuario';
import { Rol } from '../../../../models/rol';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RolService } from '../../../../services/rol.service';

@Component({
  selector: 'app-turista-form',
  templateUrl: './turista-form.component.html',
  styleUrls: ['./turista-form.component.scss'],
})
export class TuristaFormComponent implements OnInit {

  public turistaForm: FormGroup;
  public turista: Usuario;
  public rol: Rol;
  public rolSubscription = new Subscription();

  constructor(private usuarioService: UsuarioService, private rolService: RolService, private router: Router) { }

  ngOnInit() {
    this.turistaForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required])
    });
    this.rolSubscription = this.rolService.turista$().subscribe((roles: Rol[]) => {
      this.rol = roles[0];
    });
    this.rolService.turista().subscribe((response: any) => {
    });
  }

  save() {
    this.turista = new Usuario();
    this.turista.nombres = this.turistaForm.get('nombres').value;
    this.turista.apellidos = this.turistaForm.get('apellidos').value;
    this.turista.identificacion = this.turistaForm.get('identificacion').value;
    this.turista.telefono = this.turistaForm.get('telefono').value;
    this.turista.correo = this.turistaForm.get('correo').value;
    this.turista.clave = this.turistaForm.get('clave').value;
    this.turista.rol = this.rol;
    this.usuarioService.postUsuario(this.turista).subscribe((response: any) => {
      this.turistaForm.reset();
      this.router.navigate(['/taquillero/usuario-turista'], {skipLocationChange:true});
    }, err => {
      console.log(err);
    })
  }

}
