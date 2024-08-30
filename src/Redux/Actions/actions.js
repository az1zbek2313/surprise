import * as actionTypes from "../Actions/action_types";

export function addedMyAdress(data) {
    return {
        type:actionTypes.DATA_ADDED_MYADRESS,
        payload:data
    }
}

export function deletedMyAdress(data) {
    return {
        type:actionTypes.DATA_REMOVE_MYADRESS,
        payload:data
    }
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
      type:actionTypes.DATA_ADDED_MYFAVOURITES,
      payload:data
  }
}

export function deletedMyFavourites(data) {
  return {
      type:actionTypes.DATA_REMOVE_MYFAVOURITES,
      payload:data
  }
}

export function changeHeartMyFavourites(data) {
  return {
      type:actionTypes.DATA_CHANGEHEART_MYFAVOURITES,
      payload:data
  }
}