import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import propTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({contacts, toggleBestFriend, deleteContact}) => {
  console.log(contacts);

  const contactCards = contacts.map((contact, i) => {
    const { name, id, number, bestFriend } = contact;
    return <ContactCard 
      key={i} 
      id={id} 
      name={name} 
      number={number} 
      bestFriend={bestFriend} 
      toggleBestFriend={toggleBestFriend}
      deleteContact={deleteContact}
    />
  })
  
  return (
    <section className="ContactList">
      {contactCards.length ? contactCards : <h3>No Contacts Yet!</h3>}
    </section>
  )
}

export default ContactList;

ContactList.propTypes = {
  contacts: propTypes.array
}
