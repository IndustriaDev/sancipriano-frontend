import { Rol } from "./rol";
import { Reserva } from './reserva';
export class Usuario {
    public id: string;
    public nombres: string;
    public apellidos: string;
    public identificacion: string;
    public telefono: string;
    public correo: string;
    public clave: string;
    public reservas?: Array<Reserva>[];
    public rol: Rol;
    
    setUsuario(usuario: any) {
        this.id = usuario.id;
        this.nombres = usuario.nombres;
        this.apellidos = usuario.apellidos;
        this.identificacion = usuario.identificacion;
        this.telefono = usuario.telefono;
        this.clave = usuario.clave;
        this.reservas = usuario.reservas;
        this.rol = usuario.rol;
    }
}

