import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatButtonModule, MatCardModule, MatListModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './store/effects/products';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forFeature('productsFeature', reducers),
    EffectsModule.forFeature([ProductsEffects])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
