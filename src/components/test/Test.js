import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  // Legacy lifecycles Will
  // Fireoffs after the component mounts = After component is added to DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
    //   .then(data => console.log(data));
  }
  // WillmMount will run before fist render and DidMount after first render
  // Runs before it mounts.
  //   componentWillMount() {
  //     console.log("ComponentWillMount");
  //   }

  // Only runs when component updates (changing a state)
  //   componentDidUpdate() {
  //     console.log("ComponentDidUpdate");
  //   }

  //   componentWillUpdate() {
  //     console.log("ComponentWillUpdate");
  //   }

  // Runs when component receives new properties. Usually used with Redux
  // Depricated UNSAFE_componentWillReceiveProps(nextProps, nextState)
  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log(" getSnapshotBeforeUpdate");
  //   }

  render() {
    // Destructuring
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
