import { Usuario } from './usuario';
export class Reserva {
    public id: string;
    public cliente: string;
    public fecha: string;
    public aprobada: boolean;

    setReserva(reserva: any){
        this.id = reserva.id;
        this.cliente = reserva.cliente;
        this.fecha = reserva.fecha;
        this.aprobada = reserva.aprobada;
    }
}
