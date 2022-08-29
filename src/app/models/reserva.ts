import { Usuario } from './usuario';
export class Reserva {
    public id: string;
    public fecha: string;
    public cupo: number;
    public turistas: Array<Usuario> = [];

    setReserva(reserva: any){
        this.id = reserva.id;
        this.fecha = reserva.fecha;
        this.cupo = reserva.cupo;
        this.turistas = reserva.turistas;
    }
}
