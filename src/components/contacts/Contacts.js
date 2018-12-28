import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      // Consumer from the context.js which gives {value} that is whole state of contacts
      <Consumer>
        {value => {
          // Destructuring and pulling contacts from the contacts state
          const { contacts } = value;
          return (
            // Pulling contacts out of the state. Looping through them with map and returning contact component
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id} // Unique key prop
                  contact={contact}
                />
                //   <h1>{contact.name}</h1>
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
