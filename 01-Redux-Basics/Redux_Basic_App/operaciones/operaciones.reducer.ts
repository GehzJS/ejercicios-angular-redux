import { Action } from '../ngrx-fake/action';

export const reducer = (oldState = 10, action: Action) => {
  switch (action.type) {
    case 'incrementar':
      return (oldState += 1);
    case 'decrementar':
      return (oldState -= 1);
    case 'multiplicar':
      return oldState * action.payload;
    case 'dividir':
      return oldState / action.payload;
    case 'reiniciar':
      return (oldState = 0);
    default:
      return oldState;
  }
};
