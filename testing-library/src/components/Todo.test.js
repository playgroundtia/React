import React from 'react'
import {fireEvent, render, waitForElement } from '@testing-library/react'
import Todo from './Todo'

describe('Tests Todo Component',  () => {
  it('Add New Task', async () => {
    const { getByTestId, getByText } = render(<Todo/>)

    const fieldNode = await waitForElement(() => getByTestId('form-field'))
    const newTask = 'testing'
    fireEvent.change(fieldNode, {target: { value: newTask}})
    expect(fieldNode.value).toEqual(newTask)

    const btnNode = await waitForElement(() => getByTestId('form-btn'))
    fireEvent.click(btnNode)

    const tdNode = await waitForElement(() => getByText(newTask))

    expect(tdNode).toBeDefined()
  })
})