import {ShoppingCartActions, ShoppingCartActionTypes} from '../actions/shopping-cart';
import {Product} from '../../../products/product';

export interface State {
  shoppingCartItems: Product[];
}

export const initialState: State = {
  shoppingCartItems: []
};

export function reducer(state = initialState, action: ShoppingCartActions): State {
  switch (action.type) {
    case ShoppingCartActionTypes.AddItem: {
      return {
        ...state,
        shoppingCartItems: [
          ...state.shoppingCartItems,
          action.payload
        ]
      };
    }
    case ShoppingCartActionTypes.DeleteItem: {
      const newArray = [...state.shoppingCartItems];
      newArray.splice(action.payload, 1);
      return {
        ...state,
        shoppingCartItems: newArray
      };
    }
    default: {
      return state;
    }
  }
}
