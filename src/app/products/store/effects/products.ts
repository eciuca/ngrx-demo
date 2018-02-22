import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Load, LoadComplete, ProductsActionTypes} from '../actions/products';
import {switchMap} from 'rxjs/operators';
import {Product} from '../../product';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ProductsEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ProductsActionTypes.Load),
    switchMap(() => {
      const productsList: Product[] = [
        {id: 1, name: 'product 1', price: 100, stock: 10},
        {id: 2, name: 'product 2', price: 200, stock: 20},
        {id: 3, name: 'product 3', price: 300, stock: 30}
      ];

      return of(new LoadComplete(productsList));
    })
  );

  constructor(private actions$: Actions) {
  }
}
