import React, { Component } from "react";
// For the case "ADD_CONTACT" from the context.js
import { Consumer } from "../../context";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault(); // PreventDefault blocks event from sending HTTP request to server
    // Destructuring
    // Inputs are in state which are pulled out from the state
    const { name, email, phone } = this.state;
    // Constructing a new contact
    const newContact = {
      // ES6 syntax replaces: name: name
      id: uuid(), // generates the id
      name,
      email,
      phone
    };
    // console.log(this.state);
    // Calling dispatch method
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state = Clears the input after adding the contact
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };
  // name="name", name="email", name="phone"
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // Destructuring
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          // Destructuring
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* Form group for name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name.."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* Form group for email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email.."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* Form group for phone */}
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone.."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* Submit button */}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
