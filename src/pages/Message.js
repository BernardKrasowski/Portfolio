import React from 'react'
import "../styles/AdminPage.css"

function Message({ message, date, id, remove }) {

  return (
    <div className="message" id={id}>
      <span> Message</span> {message} <span>{date}</span>
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default Message
