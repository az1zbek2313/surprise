import * as actionTypes from "./action_types";

export function addedMyAdress(data) {
  return {
    type: actionTypes.DATA_ADDED_MYADRESS,
    payload: data,
  };
}

export function deletedMyAdress(data) {
  return {
    type: actionTypes.DATA_REMOVE_MYADRESS,
    payload: data,
  };
}

export function editMyAdress(data) {
  return {
    type: actionTypes.DATA_EDIT_MYADRESS,
    payload: {
      id: data.id,
      data: data,
    },
  };
}

export function addedMyFavourites(data) {
  return {
    type: actionTypes.DATA_ADDED_MYFAVOURITES,
    payload: data,
  };
}

export function deletedMyFavourites(data) {
  return {
    type: actionTypes.DATA_REMOVE_MYFAVOURITES,
    payload: data,
  };
}

export function addedMyCart(data) {
  return {
    type: actionTypes.DATA_ADDED_MYCART,
    payload: data,
  };
}

export function deletedMyCart(data) {
  return {
    type: actionTypes.DATA_REMOVE_MYCART,
    payload: data,
  };
}

export function getMyFavourites(data) {
  return {
    type: actionTypes.GET_MYFAVOURITES,
    payload: data,
  };
}

export function changeHeartMyFavourites(data) {
  return {
    type: actionTypes.DATA_CHANGEHEART_MYFAVOURITES,
    payload: data,
  };
}

export function decrement(state) {
  return {
    type: actionTypes.DECREMENT,
    payload: state,
  };
}

export function incerement(state) {
  return {
    type: actionTypes.INCEREMENT,
    payload: state,
  };
}

export function inputAmount(state, input) {
  return {
    type: actionTypes.INPUTAMOUNT,
    payload: { data:state, inputNumber:input },
  };
}

export function userId(data) {
  return {
    type: actionTypes.USER_ID,
    payload: data,
  };
}

export function productId(data) {
  return {
    type: actionTypes.PRODUCT_ID,
    payload: data,
  };
}
