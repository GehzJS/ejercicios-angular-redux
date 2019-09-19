import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../contador.reducers';
import { Observable } from 'rxjs';
import { potenciar, raiz, reiniciar } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
  contador: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.contador = this.store.pipe(select('contador'));
  }

  ngOnInit() {}

  potenciar() {
    this.store.dispatch(potenciar({ potenciador: 3 }));
  }

  raiz() {
    this.store.dispatch(raiz());
  }

  reiniciar() {
    this.store.dispatch(reiniciar());
  }
}
