import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {Store} from '@ngrx/store';
import * as fromShoppingCart from '../../shopping-cart/store/reducers';
import * as shoppingCartActions from '../../shopping-cart/store/actions/shopping-cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  public product: Product;
  constructor(private store: Store<fromShoppingCart.State>) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.store.dispatch(new shoppingCartActions.AddItem(product));
  }
}
