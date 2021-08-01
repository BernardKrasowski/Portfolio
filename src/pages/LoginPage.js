import React, { useState } from 'react'
import '../styles/LoginPage.css'
import AdminPage from './AdminPage'

function LoginPage() {

  const [user, setUser] = useState(true)
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
      {
        !user ? (<div className="wrapper__loginPage" >
          <div className='loginPage'>
            <input value={login} onChange={handlerInput} className='input__login' type="text" placeholder="Your Login" />
            <input value={password} onChange={handlerInput} className='input__password' type="password" placeholder="Password" />
            <button onClick={signIn}>Sign in</button>
          </div>
        </div>) : (
          <AdminPage />
        )
      }

    </>
  )
}

export default LoginPage
