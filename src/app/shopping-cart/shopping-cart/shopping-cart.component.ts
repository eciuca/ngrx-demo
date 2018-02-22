import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../products/product';
import {Store} from '@ngrx/store';
import * as fromShoppingCart from '../store/reducers';
import {DeleteItem} from '../store/actions/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<Product[]>;
  constructor(private store: Store<fromShoppingCart.State>) { }

  ngOnInit() {
    this.shoppingCartItems$ = this.store.select(fromShoppingCart.getShoppingCartItems);
  }

  removeFromCart(index: number) {
    console.log('Should delete shopping cart item ' + index);
    this.store.dispatch(new DeleteItem(index));
  }
}
