import React from 'react';

const UserInfo = (props) => {

    return (
      <div className="header">
        <h2>Hello, {props.title}!</h2>
        <p>{props.description}</p>
      </div>
    )
  }
  
export default UserInfo;