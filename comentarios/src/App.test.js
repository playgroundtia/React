import React from 'react'
import { shallow } from 'enzyme'
import { CommentContext } from 'context/comment'

import App from 'App'

describe('<App />', () => {
  it('renders without crashing', () => {
    const m = {
      addComment: jest.fn()
    }
    jest.spyOn(CommentContext, 'addComment')
      .mockImplementation(() => m)

    const wrapper = shallow(<App />)

    console.log(wrapper.instance())
  })
})
