import ICompetidor  from '../interfaces/ICompetidor';
import { Jugador } from './Jugador';

export class Equipo implements ICompetidor {
  nombre: string;
  private jugadores: Map<string, Jugador> = new Map();

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  agregarJugador(j: Jugador): void {
    if (this.jugadores.has(j.id)) {
      throw new Error(`El jugador con id ${j.id} ya está en el equipo ${this.nombre}`);
    }
    this.jugadores.set(j.id, j);
  }

  listarIntegrantes(): string[] {
    return Array.from(this.jugadores.values()).map((j) => j.toString());
  }

  get cantidad(): number {
    return this.jugadores.size;
  }

  toString(): string {
    return `Equipo: ${this.nombre} (jugadores: ${this.cantidad})`;
  }
}
