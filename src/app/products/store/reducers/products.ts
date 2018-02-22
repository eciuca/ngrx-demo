import {Product} from '../../product';
import {ProductsActions, ProductsActionTypes} from '../actions/products';

export interface State {
  entities: Product[];
  selectedProductId: number;
}

export const initialState: State = {
  entities: [],
  selectedProductId: 0
};

export function reducer(state = initialState, action: ProductsActions): State {
  switch (action.type) {
    case ProductsActionTypes.LoadComplete: {
      return {
        ...state,
        entities: action.payload
      };
    }
    case ProductsActionTypes.Select: {
      return {
        ...state,
        selectedProductId: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
