import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {Store, StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers/index';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('shoppingCartFeature', reducers),
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [ShoppingCartComponent],
  exports: [ShoppingCartComponent]
})
export class ShoppingCartModule { }
