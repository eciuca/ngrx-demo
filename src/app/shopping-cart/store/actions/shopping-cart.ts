
import {Action} from '@ngrx/store';
import {Product} from '../../../products/product';

export enum ShoppingCartActionTypes {
  AddItem = '[ShoppingCart] Add Item',
  DeleteItem = '[ShoppingCart] Delete Item'
}

export class AddItem implements Action {
  readonly type = ShoppingCartActionTypes.AddItem;

  constructor(public payload: Product) { }
}

export class DeleteItem implements Action {
  readonly type = ShoppingCartActionTypes.DeleteItem;

  constructor(public payload: number) { }
}

export type ShoppingCartActions
  = AddItem
  | DeleteItem;
