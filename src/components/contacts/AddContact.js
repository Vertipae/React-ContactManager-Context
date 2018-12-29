import React, { Component } from "react";
// For the case "ADD_CONTACT" from the context.js
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    // Errors object for validation
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault(); // PreventDefault blocks event from sending HTTP request to server
    // Destructuring
    // Inputs are in state which are pulled out from the state
    const { name, email, phone } = this.state;
    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      // Stopping it by returning
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }
    // Constructing a new contact
    const newContact = {
      // ES6 syntax replaces: name: name
      // id: uuid(), generates the id
      name,
      email,
      phone
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });
    // Promise
    // .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    // Clear state = Clears the input after adding the contact
    this.setState({
      name: "",
      email: "",
      phone: "",
      // Clears the errors
      errors: {}
    });
    // Redirecting to homepage when adding contact
    this.props.history.push("/");
  };
  // name="name", name="email", name="phone"
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // Destructuring
    const { name, email, phone, errors } = this.state;

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
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    // Type is text by default but in email it is type="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

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
