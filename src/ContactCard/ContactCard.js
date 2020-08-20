import React from 'react';
import propTypes from 'prop-types';
import './ContactCard.css';

const ContactCard = ({name, number, bestFriend, id, toggleBestFriend}) => {
  return (
    <article className="ContactCard" id={id}>
      <h1>{name}{bestFriend && <span> ❤️  </span>}</h1>
      <h2>{number}</h2>
      <button onClick={()=> toggleBestFriend(id)}>
        {!bestFriend ? "Make BFF" : "Remove BFF"}
      </button> 
    </article>
  )
}

export default ContactCard;

ContactCard.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
  bestFriend: propTypes.bool,
  id: propTypes.number
}
