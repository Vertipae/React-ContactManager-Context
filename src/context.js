import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
// context.js holds application state

// Reducer evaluates the action type which is DELETE_CONTACT.
// Then it is going to filter out the contact with the id which is sent in the payload
// Then calling reducer from the dispatch which is part of the state that is passed down to component that uses Consumer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          // action.payload is data what you want to send with action in this case id
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        // Sending the new contact as the payload and update the state by adding a new contact
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [],
    // Delete contact thingy
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contacts: res.data }));
  }

  render() {
    return (
      // Provider that gives value which holds state
      // Value is whole state of contacts
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Any component that uses context.js has to import { Consumer }
export const Consumer = Context.Consumer;
