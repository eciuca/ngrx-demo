
import {Action} from '@ngrx/store';
import {Product} from '../../product';

export enum ProductsActionTypes {
  Load = '[Products] Load',
  LoadComplete = '[Products] Load Complete',
  Select = '[Products] Select'
}

export class Load implements Action {
  readonly type = ProductsActionTypes.Load;

}

export class LoadComplete implements Action {
  readonly type = ProductsActionTypes.LoadComplete;

  constructor(public payload: Product[]) { }
}

export class Select implements Action {
  readonly type = ProductsActionTypes.Select;

  constructor(public payload: number) { }
}

export type ProductsActions
 = Load
 | LoadComplete
 | Select;
