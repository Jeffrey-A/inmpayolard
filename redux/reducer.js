import { combineReducers} from 'redux';

import {
  CREATE_PROPERTY,
  UPDATE_PROPERTY,
  DELETE_PROPERTY,
  ADD_PROPERTY_TO_FAV_LIST,
  REMOVE_PROPERT_FROM_FAV_LIST,
} from './action';


import properties from '../testData';



const initialState = {
  properties,
  savedProperties: [],
};

function findIndex(properties, targetProperty) {
  for(let i = 0; i < properties.length; i++){
    if(properties[i].id === targetProperty.id) {
      return i;
    }
  }
  return -1;
}

function replaceProperty(options) {
  const { properties, propertyToBeUpdated, updatedPayload } = options;
  
  const targetPropertyIndex = findIndex(properties, propertyToBeUpdated);
  const propertiesCopy = properties.slice();
  targetPropertyIndex >= 0 ? propertiesCopy[targetPropertyIndex] = updatedPayload : null;
  return propertiesCopy;
}


export const propertyReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_PROPERTY: 
      return { ...state, properties: action.payload };
    case ADD_PROPERTY_TO_FAV_LIST:

      return ({ 
        ...state, 
        properties: replaceProperty({properties: state.properties, propertyToBeUpdated: action.payload, updatedPayload: {...action.payload, isSaved: true}}),
        savedProperties:[...state.savedProperties, {...action.payload, isSaved: true}],
      });
    case REMOVE_PROPERT_FROM_FAV_LIST:
      const propertyId = action.payload.id;
      const filteredProperties = state.savedProperties.filter(property => property.id !== propertyId);

      return ({
        ...state, 
        savedProperties: filteredProperties, 
        properties: replaceProperty({ properties: state.properties, propertyToBeUpdated: action.payload, updatedPayload: {...action.payload, isSaved: false }}),
      });
    default:
      return state;
  };
};



const rootReducer = combineReducers({
  propertyReducer: propertyReducer,
});


export default rootReducer;


