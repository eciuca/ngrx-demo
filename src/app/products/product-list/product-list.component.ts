import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';
import * as fromProducts from '../store/reducers';
import {Load, Select} from '../store/actions/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.products$ = this.store.select(fromProducts.getProductsList);
  }

  select(event, productId: number) {
    event.preventDefault();
    this.store.dispatch(new Select(productId));
  }

}
