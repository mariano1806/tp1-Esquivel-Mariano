import { Jugador } from './models/Jugador';
import { Equipo } from './models/Equipo';
import { Futbol } from './models/Futbol';
import { Basquet } from './models/Basquet';
import { Partido } from './models/Partido';
import { Torneo } from './models/Torneo';
import { Resultado } from './models/Resultado';

const jugadoresA = [
  new Jugador('a1', 'Messi', 37, 'Delantero'),
  new Jugador('a2', 'Di María', 36, 'Volante'),
  new Jugador('a3', 'Dybala', 31, 'Delantero'),
  new Jugador('a4', 'Enzo', 24, 'Volante'),
  new Jugador('a5', 'Otamendi', 36, 'Defensor'),
  new Jugador('a6', 'De Paul', 30, 'Volante'),
  new Jugador('a7', 'Tagliafico', 32, 'Defensor'),
  new Jugador('a8', 'Paredes', 31, 'Volante'),
  new Jugador('a9', 'Martínez', 28, 'Arquero'),
  new Jugador('a10', 'Álvarez', 25, 'Delantero'),
  new Jugador('a11', 'Lo Celso', 29, 'Volante'),
];

const jugadoresB = [
  new Jugador('b1', 'Jugador B1', 27),
  new Jugador('b2', 'Jugador B2', 26),
  new Jugador('b3', 'Jugador B3', 28),
  new Jugador('b4', 'Jugador B4', 30),
  new Jugador('b5', 'Jugador B5', 24),
  new Jugador('b6', 'Jugador B6', 29),
  new Jugador('b7', 'Jugador B7', 33),
  new Jugador('b8', 'Jugador B8', 22),
  new Jugador('b9', 'Jugador B9', 21),
  new Jugador('b10', 'Jugador B10', 25),
  new Jugador('b11', 'Jugador B11', 27),
];

const jugadoresC = [
  new Jugador('c1', 'Mini 1', 20),
  new Jugador('c2', 'Mini 2', 21),
  new Jugador('c3', 'Mini 3', 22),
  new Jugador('c4', 'Mini 4', 23),
];

const equipoA = new Equipo('Los Pumas');
jugadoresA.forEach(j => equipoA.agregarJugador(j));

const equipoB = new Equipo('Tigre FC');
jugadoresB.forEach(j => equipoB.agregarJugador(j));

const equipoC = new Equipo('Chiquitos FC');
jugadoresC.forEach(j => equipoC.agregarJugador(j));

console.log('\n=== Equipos creados ===');
console.log(equipoA.toString(), '→', equipoA.cantidad, 'jugadores');
console.log(equipoB.toString(), '→', equipoB.cantidad, 'jugadores');
console.log(equipoC.toString(), '→', equipoC.cantidad, 'jugadores');

const futbol = new Futbol();
const basquet = new Basquet();

console.log('\n=== Validaciones de equipos ===');
console.log(`${equipoA.nombre} válido para fútbol?`, futbol.validar(equipoA));
console.log(`${equipoB.nombre} válido para básquet?`, basquet.validar(equipoB));
console.log(`${equipoC.nombre} válido para fútbol?`, futbol.validar(equipoC));

const torneo = new Torneo('t1', 'Copa Universidad');

const partido1 = new Partido('p1', equipoA, equipoB, futbol);
torneo.programarPartido(partido1);
const resultado1 = partido1.jugar();
console.log('\nResultado automático:', resultado1.toString());
console.log('Partido 1:', partido1.toString());

const partido2 = new Partido('p2', equipoA, equipoB, futbol);
torneo.programarPartido(partido2);
const resultado2 = new Resultado(2, 2);
partido2.jugar(resultado2);
console.log('Resultado forzado:', resultado2.toString());
console.log('Partido 2:', partido2.toString());

console.log('\n=== Partidos en el torneo ===');
torneo.listarPartidos().forEach(p => console.log(p.toString()));
