import React from 'react'

// Context
import { AuthContext } from 'context/auth'

export default function User () {
  const { userInfo, logout } = React.useContext(AuthContext)

  return (
    <div>
      <p>Logado como {userInfo.email}</p>
      <button type='button' onClick={logout}> Sair </button>
    </div>
  )
}
