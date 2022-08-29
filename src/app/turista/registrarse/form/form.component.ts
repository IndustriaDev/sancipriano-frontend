import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Rol } from '../../../models/rol';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  public usuarioForm: FormGroup;
  public usuario: Usuario;
  public rol: Rol;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.usuarioForm = new FormGroup({
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
    this.rol.id = "63018e14b84f373b50519c12";
    this.rol.nombre = "taquillero";
    this.usuario = new Usuario();
    this.usuario.nombres = this.usuarioForm.get('nombres').value;
    this.usuario.apellidos = this.usuarioForm.get('apellidos').value;
    this.usuario.identificacion = this.usuarioForm.get('identificacion').value;
    this.usuario.telefono = this.usuarioForm.get('telefono').value;
    this.usuario.correo = this.usuarioForm.get('correo').value;
    this.usuario.clave = this.usuarioForm.get('clave').value;
    this.usuario.rol = this.rol;
    this.usuarioService.postUsuario(this.usuario).subscribe((response: any) => {
      console.log(response);
      this.usuarioForm.reset();
      this.router.navigateByUrl('/home', {skipLocationChange:true});
    }, err => {
      console.log(err);
    })
  }

}
