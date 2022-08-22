export class Rol {
    public id: string;
    public nombre: string;

    setRol(rol: any){
        this.id = rol.id;
        this.nombre = rol.nombre;
    }
}
