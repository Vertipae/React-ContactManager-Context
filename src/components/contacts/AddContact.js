import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onSubmit = e => {
    e.preventDefault(); // PreventDefault blocks event from sending HTTP request to server
    console.log(this.state);
  };
  // name="name", name="email", name="phone"
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    // Destructuring
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact;
