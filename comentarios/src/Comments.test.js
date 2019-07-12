import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {
  it('should render Comments', () => {
    const comments = [
      { id: 'a', comment: 'Teste' },
      { id: 'b', comment: 'Teste2' }
    ]
    const wrapper = shallow(<Comments comments={comments} />)
    expect(wrapper.find(Comment).length).toBe(2)
    expect(wrapper.find(Comment).get(0).props.item).toBe(comments[0])
    expect(wrapper.find(Comment).get(0).key).toBe(comments[0].id)
  })

  it('should work with no Comments', () => {
    const comments = []
    const html = `<div><p>não existe comentarios</p></div>`
    const wrapper = shallow(<Comments comments={comments} />)
    expect(wrapper.html()).toBe(html)
  })
})
