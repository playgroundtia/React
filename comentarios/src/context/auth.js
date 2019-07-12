import React from 'react'
import p from 'prop-types'

// auth
import { auth } from 'service/firebase'

export const AuthContext = React.createContext()

function Auth ({ children }) {
  const [userInfo, setUserInfo] = React.useState({
    isUserLoggedIn: false,
    email: ''
  })
  const [authError, setAuthError] = React.useState('')
  const [authErrorSign, setAuthErrorSign] = React.useState('')
  const [isAuthError, setIsAuthError] = React.useState(false)
  const [isAuthErrorSign, setIsAuthErrorSign] = React.useState(false)
  const [didCheckUserIn, setDidCheckUserIn] = React.useState(false)
  const [ page, setPage ] = React.useState('Login')

  const messageError = {
    'auth/invalid-email': 'E-mail inválido',
    'auth/wrong-password': 'E-mail e/ou senha inválido',
    'auth/user-not-fount': 'Usuário não encontrado',
    'auth/email-already-in-use': 'E-mail já utilizado',
    'auth/weak-password': 'Senha muito fraca'
  }

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUserInfo({
        isUserLoggedIn: !!user,
        email: user && user.email,
        id: user && user.uid
      })
    })
    setDidCheckUserIn(true)
  }, [setUserInfo])

  const login = React.useCallback(async ({ email, passwd }) => {
    try {
      setAuthError('')
      setIsAuthError(false)
      await auth.signInWithEmailAndPassword(email, passwd)
    } catch (error) {
      setAuthError(messageError[error.code])
      setIsAuthError(true)
    }
  }, [messageError])

  const signup = React.useCallback(async ({ email, passwd }) => {
    try {
      setAuthErrorSign('')
      setIsAuthErrorSign(false)
      await auth.createUserWithEmailAndPassword(email, passwd)
    } catch (error) {
      setAuthErrorSign(messageError[error.code])
      setIsAuthErrorSign(true)
    }
  }, [messageError])

  const logout = React.useCallback(() => {
    auth.signOut()
  }, [])

  return (
    <AuthContext.Provider value={{
      login,
      authError,
      isAuthError,
      userInfo,
      logout,
      didCheckUserIn,
      page,
      setPage,
      signup,
      authErrorSign,
      isAuthErrorSign
    }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: p.node.isRequired
}

export default Auth
