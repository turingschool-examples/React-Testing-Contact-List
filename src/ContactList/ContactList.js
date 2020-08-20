import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import propTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({contacts}) => {

  const contactCards = contacts.map((contact, i) => {
    const { name, id, number, bestFriend } = contact;
    return <ContactCard key={i} id={id} name={name} number={number} bestFriend={bestFriend} />
  })
  
  return (
    <section className="ContactList">
      {contactCards}
    </section>
  )
}

export default ContactList;

ContactList.propTypes = {
  contacts: propTypes.array
}
