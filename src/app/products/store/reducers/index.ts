import * as fromProducts from './products';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRoot from '../../../reducers';

export interface ProductsState {
  products: fromProducts.State;
}

export interface State extends fromRoot.State {
  products: ProductsState;
}

export const reducers = {
  products: fromProducts.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('productsFeature');

export const getProducts = createSelector(getProductsState,
    state => state.products);

export const getProductsList = createSelector(getProducts,
    state => state.entities);

export const getSelectedProductId = createSelector(getProducts,
    state => state.selectedProductId);

export const getSelectedProduct = createSelector(getProducts, getSelectedProductId,
  (productsList, selectedProductId) =>
    productsList.entities.find(product => product.id === selectedProductId));
