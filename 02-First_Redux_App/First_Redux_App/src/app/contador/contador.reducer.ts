import { createReducer, on } from '@ngrx/store';
import * as accionesContador from './contador.actions';
export const STATE = 0;

export const contadorReducer = createReducer(
  STATE,
  on(accionesContador.incrementar, state => state + 1),
  on(accionesContador.decrementar, state => state - 1),
  on(
    accionesContador.multiplicar,
    (state, { multiplicador }) => state * multiplicador
  ),
  on(accionesContador.dividir, (state, { divisor }) => state / divisor),
  on(accionesContador.potenciar, (state, { potenciador }) =>
    Math.pow(state, potenciador)
  ),
  on(accionesContador.raiz, state => Math.sqrt(state)),
  on(accionesContador.reiniciar, state => 0)
);
