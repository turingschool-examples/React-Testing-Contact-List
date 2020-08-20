import React, { Component } from 'react';
import propTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({name:"", number:''});
  }

  render() {
    return (
      <form>
        <input 
          name="name"
          placeholder="Contact Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          name="number"
          placeholder="Contact Number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleSubmit}>
        Add Contact
        </button>
      </form>
    )
  }
}

export default Form;

Form.propTypes = {
  addContact: propTypes.func
}
