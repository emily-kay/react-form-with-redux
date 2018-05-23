import React, { Component } from 'react';
import { connect } from 'react-redux';

class SnackForm extends Component {

  constructor() {
    super();
    this.state = {
      input: []
    }
  }

  handleElementChange = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
  }

  submitElementChange = (event) => {
    event.preventDefault();
    const action = {type: 'SNACK', info: this.state.input}
    this.props.dispatch(action)
  }

  render() {
    return (
        <form>
          <input onChange={this.handleElementChange} placeholder="Add a snack" />
          <button onClick={this.submitElementChange}>Submit</button>
        </form>
    );
  }
}
//connect allows us to dispatch actions
export default connect()(SnackForm);