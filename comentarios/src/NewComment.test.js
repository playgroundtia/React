import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import NewComment from './NewComment'

describe('<New Comment/>', () => {
  it('should handle changes in textarea', async () => {
    const addComment = jest.fn()
    const { getByTestId } = render(<NewComment addComment={addComment} />)
    // TextArea
    const fieldNode = await waitForElement(() => getByTestId('form-textarea'))
    const newComment = 'testing'
    fireEvent.change(fieldNode, { target: { value: newComment } })
    expect(fieldNode.value).toEqual(newComment)
    // Button
    const btnNode = await waitForElement(() => getByTestId('form-btn'))
    fireEvent.click(btnNode)
    expect(addComment).toBeCalledWith(newComment)
  })
})
