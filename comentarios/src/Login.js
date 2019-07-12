import React from 'react'

// Context
import { AuthContext } from 'context/auth'

export default function Login () {
  const [formLogin, setFormLogin] = React.useState({
    email: '',
    passwd: ''
  })

  const {
    login,
    authError,
    isAuthError,
    setPage
  } = React.useContext(AuthContext)

  const handleChange = field => event => {
    setFormLogin({ ...formLogin, [field]: event.target.value })
  }

  return (
    <>
      <h4>Login</h4>
      <input type='text' onChange={handleChange('email')} placeholder='email' />
      <input type='password' onChange={handleChange('passwd')} placeholder='senha' />
      <button type='button' onClick={() => login(formLogin)}>Entrar</button>
      {' '}
      <button type='button' className='button button-outline' onClick={() => setPage('SignUp')}>Criar Conta</button>
      {isAuthError && <p className='primary'><b>{authError}</b></p>}
    </>
  )
}
