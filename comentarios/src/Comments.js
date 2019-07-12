import React from 'react'
import p from 'prop-types'

// Component
import Comment from 'Comment'

export default function Comments ({ comments }) {
  return (
    <div>
      { /** Comment */}
      {
        comments.length
          ? (comments.map(item => <Comment key={item.id || `${Math.random()}`} item={item} />))
          : (<p>não existe comentarios</p>)
      }
    </div>
  )
}

Comments.propTypes = {
  comments: p.array.isRequired
}
