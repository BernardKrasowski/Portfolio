
import React, { useState } from 'react'
import LoginPage from './LoginPage';



function AdminPage() {

  const [user, setUser] = useState(false)

  const signIn = () => {
    setUser(!user)
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
