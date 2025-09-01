import { Jugador } from './models/Jugador';
import { Equipo } from './models/Equipo';
import { Futbol } from './models/Futbol';
import { Basquet } from './models/Basquet';
import { Partido } from './models/Partido';
import { Torneo } from './models/Torneo';
import { Resultado } from './models/Resultado';

// Crear jugadores y equipos
const j1 = new Jugador('j1', 'Messi', 37, 'Delantero');
const j2 = new Jugador('j2', 'Di María', 36, 'Volante');
const equipoA = new Equipo('Los Pumas');
equipoA.agregarJugador(j1);
equipoA.agregarJugador(j2);

const equipoB = new Equipo('Tigre FC');
equipoB.agregarJugador(new Jugador('j3', 'Dybala', 31));

// Deportes
const futbol = new Futbol();
const basquet = new Basquet();

// Validaciones polimórficas
console.log(`${equipoA.nombre} válido para fútbol?`, futbol.validar(equipoA));
console.log(`${equipoA.nombre} válido para básquet?`, basquet.validar(equipoA));

// Partidos
const partido1 = new Partido('p1', equipoA, equipoB, futbol);

// Torneo
const torneo = new Torneo('t1', 'Copa Universidad');
torneo.programarPartido(partido1);

// Jugar
const resultado = partido1.jugar();
console.log('Resultado:', resultado.toString());

// Mostrar partidos
torneo.listarPartidos().forEach(p => console.log(p.toString()));
