import IIdentificable from '../interfaces/IIdentificable';
import { Equipo } from './Equipo';
import { Deporte } from './Deporte';
import { Resultado } from './Resultado';

export class Partido implements IIdentificable {
  readonly id: string;
  local: Equipo;
  visitante: Equipo;
  deporte: Deporte;
  private _resultado?: Resultado;

  constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte) {
    if (local === visitante) throw new Error('El local y visitante no pueden ser el mismo objeto');
    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
  }

  get resultado(): Resultado | undefined {
    return this._resultado;
  }

  jugar(result?: Resultado): Resultado {
    if (!this.deporte.validar(this.local)) throw new Error(`Equipo local '${this.local.nombre}' no válido`);
    if (!this.deporte.validar(this.visitante)) throw new Error(`Equipo visitante '${this.visitante.nombre}' no válido`);

    if (result) {
      this._resultado = result;
      return this._resultado;
    }

    const golesLocal = Math.floor(Math.random() * 7);
    const golesVisitante = Math.floor(Math.random() * 7);
    this._resultado = new Resultado(golesLocal, golesVisitante);
    return this._resultado;
  }

  toString(): string {
    return `Partido(${this.id}): ${this.local.nombre} vs ${this.visitante.nombre} - ${this.deporte.nombre} - ${this._resultado ? this._resultado.toString() : 'Pendiente'}`;
  }
}
