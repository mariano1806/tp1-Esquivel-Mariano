import { Equipo } from './Equipo';

export abstract class Deporte {
  nombre: string;
  maxPorEquipo: number;

  constructor(nombre: string, maxPorEquipo: number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }

  abstract validar(equipo: Equipo): boolean;

  toString(): string {
    return `${this.nombre} (máx ${this.maxPorEquipo})`;
  }
}
