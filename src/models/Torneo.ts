import IIdentificable  from '../interfaces/IIdentificable';
import { Partido } from './Partido';

export class Torneo implements IIdentificable {
  readonly id: string;
  nombre: string;
  private partidos: Map<string, Partido> = new Map();

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  programarPartido(p: Partido): void {
    if (this.partidos.has(p.id)) throw new Error(`Ya existe un partido con id ${p.id}`);
    this.partidos.set(p.id, p);
  }

  listarPartidos(): Partido[] {
    return Array.from(this.partidos.values());
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.get(id);
  }
}
