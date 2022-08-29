import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../../../models/usuario';
import { Rol } from '../../../../models/rol';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-turista-form',
  templateUrl: './turista-form.component.html',
  styleUrls: ['./turista-form.component.scss'],
})
export class TuristaFormComponent implements OnInit {

  public turistaForm: FormGroup;
  public turista: Usuario;
  public rol: Rol;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.turistaForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required])
    });
  }

  save() {
    this.rol = new Rol();
    this.rol.id = "6303d68654d33324100869a5";
    this.rol.nombre = "turista";
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
      this.router.navigate(['/administrador/usuario-turista'], {skipLocationChange:true});
    }, err => {
      console.log(err);
    })
  }

}
