import React from 'react';

const Message = (props) => {

    return (
      <div className="header">
        <h2>Hello, {props.name}!</h2>
        <p>{props.birthYear} is the year of your birth!</p>
      </div>
    )
  }
  
export default Message;