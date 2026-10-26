const tablero = [
  { casilla: 0, fichas: { A: { x: 0, y: 0 }, B: { x: 20, y: 0 } } },
  { casilla: 1, fichas: { A: { x: 60, y: 0 }, B: { x: 80, y: 0 } } },
  { casilla: 2, fichas: { A: { x: 100, y: 0 }, B: { x: 120, y: 0 } } },
  { casilla: 3, fichas: { A: { x: 140, y: 0 }, B: { x: 160, y: 0 } } }
];

const casillaActual = tablero[3];
casillaActual.fichas.A = { x: 140, y: 0 };