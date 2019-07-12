import React from 'react'
import Comment from 'Comment'
import { render } from 'enzyme'

it('should render', () => {
  const comment = {
    comment: 'Teste'
  }
  const wrapper = render(<Comment item={comment} />)
  expect(wrapper.text()).toBe('Teste')
})
