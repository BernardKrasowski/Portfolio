
import React, { useState } from 'react'
import LoginPage from './LoginPage';



function AdminPage() {

  const [user, setUser] = useState(false)
  const [login, setlogin] = useState('')
  const [password, setpassword] = useState('')

  const handlerInput = (e) => {
    const txt = e.target.value;

    if (e.target.type === "password") {
      setpassword(txt);
    } else {
      setlogin(txt)
    }

  }

  const signIn = () => {
    if (login !== "" && password !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: login, password: password })
      };
      fetch('http://localhost:9000/login', requestOptions)
        .then(response => response.json())
        .then(data => {
          setUser(data)
        })
    } else { alert('Write login and password.') }
  }
  return (
    <>
      {!user ? (
        <LoginPage sign={signIn} log={login} pass={password} change={handlerInput} />
      )
        :
        (
          <h1>Panel admin</h1>
        )
      }
    </>
  )
}

export default AdminPage
