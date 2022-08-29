import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rol } from '../../../../models/rol';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario.service';
import { RolService } from '../../../../services/rol.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-taquillero-form',
  templateUrl: './taquillero-form.component.html',
  styleUrls: ['./taquillero-form.component.scss'],
})
export class TaquilleroFormComponent implements OnInit {

  public usuarioForm: FormGroup;
  public usuario: Usuario;
  public rol: Rol;
  public rolSubscription = new Subscription();

  constructor( private usuarioService: UsuarioService, private rolService: RolService, private router: Router ) { }

  ngOnInit() {
    this.usuarioForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required])
    });
    this.rolSubscription = this.rolService.taquillero$().subscribe((roles: Rol[]) => {
      this.rol = roles[0];
    });
    this.rolService.taquillero().subscribe((response: any) => {
      });
  }

  save() {
    this.usuario = new Usuario();
    this.usuario.nombres = this.usuarioForm.get('nombres').value;
    this.usuario.apellidos = this.usuarioForm.get('apellidos').value;
    this.usuario.identificacion = this.usuarioForm.get('identificacion').value;
    this.usuario.telefono = this.usuarioForm.get('telefono').value;
    this.usuario.correo = this.usuarioForm.get('correo').value;
    this.usuario.clave = this.usuarioForm.get('clave').value;
    this.usuario.rol = this.rol;
    this.usuarioService.postUsuario(this.usuario).subscribe((response: any) => {
      this.usuarioForm.reset();
      this.router.navigate(['/administrador/usuario-taquillero'], {skipLocationChange:true});
    }, err => {
      console.log(err);
    })
  }

}
