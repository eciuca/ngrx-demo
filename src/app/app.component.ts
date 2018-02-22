import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import * as fromProducts from './products/store/reducers';
import {Product} from './products/product';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public product$: Observable<Product>;
  title = 'The ngrx shop';
  constructor(private store: Store<fromRoot.State>) {

  }

  ngOnInit() {
    this.product$ = this.store.select(fromProducts.getSelectedProduct);
  }
}
