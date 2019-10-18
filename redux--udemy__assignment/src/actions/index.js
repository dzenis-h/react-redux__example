import { ADD_PERSON, REMOVE_PERSON } from "./types";

export const addPerson = () => {
  let newPerson = {
    id: Math.random(),
    name: "Dzenis",
    age: Math.floor(Math.random() * 40)
  };
  return { type: ADD_PERSON, payload: newPerson };
};

// Thanks to 'redux-thunk' we have access to dispatch() and getState() functions
// The alternative would be to import the 'store' and access it like: store.getState()
export const removePerson = id => async dispatch => {
  //   console.log(getState().persons);
  dispatch({ type: REMOVE_PERSON, payload: id });
};
