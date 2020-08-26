import React, { Component } from 'react';
import './App.css';
import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';
import { getContacts, postContact, deleteContact } from '../helpers/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }


  getAllContacts = () => {
    getContacts()
      .then(contacts => this.setState({contacts: contacts.contacts}))
      .catch(error => console.error(error))

  }

  addContact = (contact) => {
    console.log(contact)
    postContact(contact)
      .then(data => this.setState({contacts: [...this.state.contacts, data.newContact]}))
      .catch((error) => {
        console.error(error);
      })
    
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

  removeContact = (id) => {
    //const newContacts = this.state.contacts.filter(contact => contact.id !== id);
    deleteContact(id)
      .then(resolvedValue => {
        this.getAllContacts();
      });

    //this.setState({contacts: newContacts});
  }

  componentDidMount() {
    this.getAllContacts();
  }
  render() {
    return (
      <main className="App">
        <h1>Contact List</h1>
        <Form addContact={this.addContact}/>
        <ContactList 
          contacts={this.state.contacts} 
          toggleBestFriend={this.toggleBestFriend}
          removeContact={this.deleteContact}
        />
      </main>
    )
  }
}

export default App;
