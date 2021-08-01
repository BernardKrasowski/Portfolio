import React, { useState } from 'react'
import "../styles/ContactPage.css"
import { Prompt } from 'react-router-dom'

function ContactPage() {

  const [areaValue, setAreaValue] = useState('');
  const [checkSubmit, setCheckSubmit] = useState(false)
  const change = (e) => {
    setAreaValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (areaValue) {
      setAreaValue('')
      setCheckSubmit(true)
      sendMessage();
    }
    else alert('The message field is empty. Please write a message.')
  }
  const sendMessage = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ areaValue })
    };
    await fetch('http://localhost:9000/messages', requestOptions)
      .then(response => response.json())

  }
  return (


    <div className="contact">

      <form onSubmit={handleSubmit}>
        <h3>Send message:</h3>
        <textarea value={areaValue}
          onChange={change}
          placeholder='Write a message...'
        ></textarea>
        <button>Submit</button>
      </form>
      <Prompt
        when={!checkSubmit}
        message="Are you sure you want to leave without Submit message?"
      />
    </div>
  )
}

export default ContactPage
