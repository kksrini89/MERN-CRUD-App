import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions';
import uuid from 'uuid';

const initialState = {
  items: [
    { id: uuid(), name: 'milk' },
    { id: uuid(), name: 'box' },
    { id: uuid(), name: 'shoe' },
    { id: uuid(), name: 'toy' }
  ]
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      // API call to retrieve latest data
      return {
        ...state
      };
    // break;
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { id: uuid(), name: action.payload }]
      };
    // break;
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]
      };
    default:
      return {
        ...state
      };
  }
};
