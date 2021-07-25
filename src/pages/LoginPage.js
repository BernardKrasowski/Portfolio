import React from 'react'
import '../styles/LoginPage.css'

function LoginPage() {

  return (
    <div className="wrapper__loginPage">
      <div className='loginPage'>
        <input className='input__login' type="text" placeholder="Your Login" />
        <input className='input__password' type="password" placeholder="Password" />
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default LoginPage
