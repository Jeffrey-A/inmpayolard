


// PostScreen

export const CREATE_PROPERTY = 'ADD_PROPERTY';
export const UPDATE_PROPERTY = 'UPDATE_PROPERTY';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';

// SavedPropertiesScreen

export const ADD_PROPERTY_TO_FAV_LIST = 'ADD_PROPERTY_TO_FAV_LIST';
export const REMOVE_PROPERT_FROM_FAV_LIST = 'REMOVE_PROPERT_FROM_FAV_LIST';


// ACTION CREATORS

export const addPropertyToFavList = newProperty => {
  console.log("Action")
  return({
    type: ADD_PROPERTY_TO_FAV_LIST,
    payload: newProperty,
  });
};




