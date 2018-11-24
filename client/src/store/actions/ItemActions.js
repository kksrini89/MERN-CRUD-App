import { ITEMS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './Types';

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

// Higher Order Function (Function returns a function) - Async calls will be taken care by 'Thunk' Middleware.
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  const url = `/api/items`;
  fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(res => {
      const result = JSON.stringify(res);
      console.log(result);
      dispatch({ type: GET_ITEMS, payload: result });
    });
  // return {
  //   type: GET_ITEMS
  // };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const deleteItem = index => {
  return {
    type: DELETE_ITEM,
    payload: index
  };
};
