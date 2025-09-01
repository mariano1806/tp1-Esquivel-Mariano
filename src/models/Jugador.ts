import IIdentificable from '../interfaces/IIdentificable';

export class Jugador implements IIdentificable {
  readonly id: string;
  nombre: string;
  edad: number;
  posicion?: string;

  constructor(id: string, nombre: string, edad: number, posicion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion;
  }

  toString(): string {
    return `Jugador(${this.id}): ${this.nombre} - ${this.edad} años${this.posicion ? ' - ' + this.posicion : ''}`;
  }
}
