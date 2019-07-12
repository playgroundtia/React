import React from 'react'
import p from 'prop-types'

export default function Comment ({ item }) {
  return (
    <div>
      <span>Comentário: {item.comment}</span>
      <br />
      <span>Usuário: {item.email}</span>
      <hr />
    </div>
  )
}

Comment.propTypes = {
  item: p.shape({
    comment: p.string
  }).isRequired
}
