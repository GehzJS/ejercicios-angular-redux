import { createAction, props } from '@ngrx/store';

export const incrementar = createAction('[Contador]: Incrementar');
export const decrementar = createAction('[Contador]: Decrementar');
export const multiplicar = createAction(
  '[Contador]: Multiplicar',
  props<{ multiplicador: number }>()
);
export const dividir = createAction(
  '[Contador]: Dividir',
  props<{ divisor: number }>()
);
export const potenciar = createAction(
  '[Contador]: Potenciar',
  props<{ potenciador: number }>()
);
export const raiz = createAction('[Contador]: Raiz');
export const reiniciar = createAction('[Contador]: Reiniciar');
