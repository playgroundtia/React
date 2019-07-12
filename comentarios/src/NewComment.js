import React from 'react'
import p from 'prop-types'

export default function NewComment ({ addComment }) {
  const [newComment, setNewComment] = React.useState('')

  const handlerNewComment = (e) => setNewComment(e.target.value)

  const addClickButtonComment = () => {
    addComment(newComment)
    setNewComment('')
  }

  return (
    <>
      <h4>New Comment</h4>
      <div className='row'>
        <textarea data-testid='form-textarea' value={newComment} onChange={handlerNewComment} />
        <button data-testid='form-btn' onClick={addClickButtonComment}> Enviar </button>
      </div>
    </>
  )
}

NewComment.propTypes = {
  addComment: p.func.isRequired
}
