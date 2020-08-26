import React from 'react';
import propTypes from 'prop-types';
import './ContactCard.css';

const ContactCard = ({name, number, bestFriend, id, toggleBestFriend, deleteContact}) => {
  return (
    <article className="ContactCard" id={id}>
      <h1>{name}{bestFriend && <span> ❤️  </span>}</h1>
      <h2>{number}</h2>
      <button onClick={()=> toggleBestFriend(id)}>
        {!bestFriend ? "Make BFF" : "Remove BFF"}
      </button> 
      <button onClick={() => deleteContact(id)}>Delete</button>
    </article>
  )
}

export default ContactCard;

ContactCard.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
  bestFriend: propTypes.bool,
  id: propTypes.number
}
