import React from 'react'
import ContentProvider from 'context/comment'
import AuthProvider from 'context/auth'
import App from 'App'

function Root () {
  return (
    <AuthProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </AuthProvider>
  )
}

export default Root
