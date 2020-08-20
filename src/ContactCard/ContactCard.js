import React from 'react';
import propTypes from 'prop-types';
import './ContactCard.css';

const ContactCard = ({name, number, bestFriend, id}) => {
  return (
    <article className="ContactCard" id={id}>
      <h1>{name}</h1>
      <h2>{number}</h2>
      <button>
        {bestFriend ? "❤️ " : "Add best friend"}
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
