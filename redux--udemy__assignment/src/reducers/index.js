import { ADD_PERSON, REMOVE_PERSON } from "../actions/types";

const initialState = {
  persons: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return { ...state, persons: state.persons.concat(action.payload) }; // payload: newPerson object
    case REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.payload) // payload: id passed from the 'Person' component
      };
    default:
      return state;
  }
};
