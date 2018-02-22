import * as fromShoppingCart from './shopping-cart';
import * as fromRoot from '../../../reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ShoppingCartState {
  shoppingCart: fromShoppingCart.State;
}

export interface State extends fromRoot.State {
  shoppingCart: ShoppingCartState;
}

export const reducers = {
  shoppingCart: fromShoppingCart.reducer
};

export const getShoppingCartState = createFeatureSelector<ShoppingCartState>('shoppingCartFeature');

export const getShoppingCart = createSelector(getShoppingCartState,
  state => state.shoppingCart);

export const getShoppingCartItems = createSelector(getShoppingCart,
  state => state.shoppingCartItems);

