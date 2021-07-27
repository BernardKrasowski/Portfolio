
import React, { useState } from 'react'
import LoginPage from './LoginPage';
import { auth, provider } from './firebase';

const permission = false;

function AdminPage() {

  const [user, setUser] = useState(null)

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => (
      console.log(result)
    )).catch(error => alert(error.message))
  }

  return (
    <>
      {!user ? (
        <LoginPage sign={signIn} />
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
