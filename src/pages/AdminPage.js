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


  const signIn = async () => {
    if (login !== "" && password !== "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: login, password: password })
      };
      await fetch('http://localhost:9000/login/admin', requestOptions)
        .then(response => {
          return response.json()
        })
        .then(data => {

          switch (data) {
            case "Succes":
              setUser(true);
              break;

            case "Not allowed":
              alert('Wrong Password')
              break;
            case "Wrong":
              alert('wrong login and password')
              break;

            default:
              console.log('ok')
              break;
          }
        })
    }
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
