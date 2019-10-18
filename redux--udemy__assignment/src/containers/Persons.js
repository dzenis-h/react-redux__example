import React from "react";
import { connect } from "react-redux";
import { addPerson, removePerson } from "../actions";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

const Persons = props => {
  return (
    <div>
      <AddPerson addPerson={props.addPerson} />
      {props.persons.map(person => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          // Our 'removePerson' action where we're passing the id used for filtering the 'persons' state
          onRemove={id => props.removePerson(person.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  // taking out the 'persons' part of the Redux state and assign it to 'persons' props
  return { persons: state.persons };
};

// THIS WOULD BE THE APPROACH WITHOUT USING 'REDUX-THUNK'

// const mapDispatchToProps = dispatch => {
//   return {
//     addPerson: () => dispatch({ type: ADD_PERSON }),
//     removePerson: id => dispatch({ type: REMOVE_PERSON, payload: id })
//   };
// };

export default connect(
  mapStateToProps,
  { addPerson, removePerson } // Our 2 action creators (since we're NOT passing 'mapDispatchToProps')
)(Persons);
