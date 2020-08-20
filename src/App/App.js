import React, { Component } from 'react';
import './App.css';
import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          name: "Khalid",
          number: 5555555,
          bestFriend: true,
          id: 1
        }
      ]
    }
  }

  addContact = (contact) => {
    contact.id = Date.now()
    this.setState({contacts: [...this.state.contacts, contact]})
  }

  render() {
    return (
      <main className="App">
        <h1>Contact List</h1>
        <Form addContact={this.addContact}/>
        <ContactList contacts={this.state.contacts}/>
      </main>
    )
  }
}

export default App;
