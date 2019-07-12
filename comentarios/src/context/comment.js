import React from 'react'
import p from 'prop-types'

// database
import { database } from 'service/firebase'

// context
import { AuthContext } from './auth'

export const CommentContext = React.createContext()

function Comment ({ children }) {
  const [comments, setComments] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const { userInfo } = React.useContext(AuthContext)

  React.useEffect(() => {
    setIsLoading(true)
    database.ref('comments').on('value', snapshot => {
      let data = []
      const dados = snapshot.val()
      const keys = Object.keys(dados)
      keys.map(key => data.push(dados[key]))
      setComments(data)
      setIsLoading(false)
    })
  }, [])

  const addComment = React.useCallback((comment) => {
    const id = database.ref().child('comments').push().key
    const comments = {}
    comments[`comments/${id}`] = {
      comment,
      email: userInfo.email,
      userid: userInfo.id
    }
    database.ref().update(comments)
  }, [userInfo.email, userInfo.id])

  return (
    <CommentContext.Provider value={{
      comments, setComments, isLoading, addComment
    }}>
      {children}
    </CommentContext.Provider>
  )
}

Comment.propTypes = {
  children: p.node.isRequired
}

export default Comment
