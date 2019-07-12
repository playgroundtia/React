import React from 'react'

import { AuthContext } from 'context/auth'

export default function SignUp () {
  const {
    setPage,
    authErrorSign,
    isAuthErrorSign,
    signup
  } = React.useContext(AuthContext)

  const [formSign, setFormSign] = React.useState({
    email: '',
    passwd: ''
  })

  const handleChange = field => event => {
    setFormSign({ ...formSign, [field]: event.target.value })
  }

  return (
    <>
      <h4>Criar Conta</h4>
      <input type='text' onChange={handleChange('email')} placeholder='email' />
      <input type='password' onChange={handleChange('passwd')} placeholder='senha' />
      <button type='button' onClick={() => signup(formSign)}>Criar e Entrar</button>
      {' '}
      {isAuthErrorSign && <p><b>{authErrorSign}</b></p>}
      <button type='button' className='button button-outline' onClick={() => setPage('Login')}>Voltar para Login</button>
    </>
  )
}
