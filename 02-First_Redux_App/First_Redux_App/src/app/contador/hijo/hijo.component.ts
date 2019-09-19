import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/contador/contador.reducers';
import { Observable } from 'rxjs';
import { multiplicar, dividir } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  contador: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.contador = this.store.pipe(select('contador'));
  }

  ngOnInit() {}

  multiplicar() {
    this.store.dispatch(multiplicar({ multiplicador: 5 }));
  }

  dividir() {
    this.store.dispatch(dividir({ divisor: 5 }));
  }
}
