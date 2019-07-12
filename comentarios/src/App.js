import React from 'react'

// Context
import { CommentContext } from 'context/comment'
import { AuthContext } from 'context/auth'

// Components
import Comments from 'Comments'
import NewComment from 'NewComment'
import Login from 'Login'
import User from 'User'
import SignUp from 'SignUp'

function App () {
  const { addComment, isLoading, comments } = React.useContext(CommentContext)
  const { userInfo, didCheckUserIn, page } = React.useContext(AuthContext)

  const sendComment = (newComment) => {
    if (newComment.trim()) {
      addComment(newComment)
    }
  }

  return (
    <div className='container'>
      {didCheckUserIn ? (
        <>
          {
            userInfo.isUserLoggedIn
              ? (
                <>
                  <User />
                  <NewComment addComment={sendComment} />
                </>
              )
              : (page === 'Login' ? <Login /> : <SignUp />)
          }
          { isLoading ? <p> carregando comentários... </p> : <Comments comments={comments} /> }
        </>
      )
        : <h1>Carregando...</h1>
      }
    </div>
  )
}

export default App
