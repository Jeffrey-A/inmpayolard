import { combineReducers} from 'redux';

import {
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ADD_PROPERTY_TO_FAV_LIST,
} from './action';


import properties from '../testData';



const initialState = {
  properties,
  savedProperties: [],
};


export const propertyReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_PROPERTY: 
      return { ...state, properties: action.payload };
    case ADD_PROPERTY_TO_FAV_LIST:
      console.log("Here")
      return { ...state, savedProperties:[...state.savedProperties, action.payload]};
    default:
      return state;
  };
};



const rootReducer = combineReducers({
  propertyReducer: propertyReducer,
});


export default rootReducer;


