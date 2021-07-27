import React from 'react'
import '../styles/LoginPage.css'

function LoginPage({ sign, log, pass, change }) {

  return (
    <div className="wrapper__loginPage">
      <div className='loginPage'>
        <input value={log} onChange={change} className='input__login' type="text" placeholder="Your Login" />
        <input value={pass} onChange={change} className='input__password' type="password" placeholder="Password" />
        <button onClick={sign}>Sign in</button>
      </div>
    </div>
  )
}

export default LoginPage
