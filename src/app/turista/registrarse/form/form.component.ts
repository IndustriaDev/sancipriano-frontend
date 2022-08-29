import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Rol } from '../../../models/rol';
import { Subscription } from 'rxjs';
import { RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public usuarioForm: FormGroup;
  public usuario: Usuario;
  public rol: Rol;
  public rolSubscription = new Subscription();

  constructor(private usuarioService: UsuarioService, private rolService: RolService, private router: Router) { }

  ngOnInit() {
    this.usuarioForm = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required])
    });

    this.rolSubscription = this.rolService.turista$().subscribe((roles: Rol[]) => {
      console.log(roles);
      
      this.rol = roles[0];
    });
    this.getTurista();
  }

  getTurista() {
    this.rolService.turista().subscribe(response => {
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
      this.router.navigateByUrl('/home', {skipLocationChange:true});
    }, err => {
      console.log(err);
    })
  }

}
