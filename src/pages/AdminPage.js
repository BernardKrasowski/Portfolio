import React, { useEffect, useState } from 'react'
import "../styles/AdminPage.css"
import Message from './Message.js'


function AdminPage() {

  const [messages, setMessages] = useState('')

  const fetchMessage = async () => {
    let response = await fetch('http://localhost:9000/messages')
    response = await response.json()
    setMessages(response)
  };

  useEffect(() => {
    fetchMessage()
  }, [messages])

  const removeMessage = async (e) => {

    const elementDOM = e.target.parentNode;
    const data = elementDOM.id

    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })

    };
    await fetch('http://localhost:9000/messages/delete', requestOptions)
      .then(response => console.log(response.json()))

  }

  return (
    <div className="adminPage">

      <h1>Admin Page:</h1>

      <div className="messages">

        {messages ? (messages.map(({ message, date, id }, index) => (
          <Message key={index} message={message} date={date} id={id} remove={removeMessage} />
        ))) : null}
      </div>
    </div>)
}

export default AdminPage
