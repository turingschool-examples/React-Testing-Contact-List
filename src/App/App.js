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
          name: "Courage",
          number: 5556694373,
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

  toggleBestFriend = (id) => {
    const copiedContacts = [...this.state.contacts]
    copiedContacts.forEach(contact => {
      if(contact.id === id) {
        contact.bestFriend = !contact.bestFriend
      }
    })
    this.setState({contacts: copiedContacts});
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({contacts: newContacts});
  }

  render() {
    return (
      <main className="App">
        <h1>Contact List</h1>
        <Form addContact={this.addContact}/>
        <ContactList 
          contacts={this.state.contacts} 
          toggleBestFriend={this.toggleBestFriend}
          deleteContact={this.deleteContact}
        />
      </main>
    )
  }
}

export default App;
