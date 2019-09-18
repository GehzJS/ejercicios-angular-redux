import { Action } from '../ngrx-fake/action';

export const incrementar: Action = {
  type: 'incrementar'
};

export const decrementar: Action = {
  type: 'decrementar'
};

export const multiplicar: Action = {
  type: 'multiplicar',
  payload: 10
};

export const dividir: Action = {
  type: 'dividir',
  payload: 5
};

export const reiniciar: Action = {
  type: 'reiniciar'
};
