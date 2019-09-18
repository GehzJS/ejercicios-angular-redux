import { Store, createStore } from 'redux';
import { reducer } from './operaciones/operaciones.reducer';
import { incrementar } from './operaciones/operaciones.action';

const store: Store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementar);

/*
import { Reducer, Action } from './ngrx-fake/action';
import { reducer } from './operaciones/operaciones.reducer';
import { incrementar } from './operaciones/operaciones.action';

class Store<T> {
  constructor(private reducer: Reducer<T>, private state: T) {}

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(reducer, 10);
console.log(store.getState());

store.dispatch(incrementar);
console.log(store.getState());
*/
