import React from 'react';
import Todo from './Todo';
import { fireEvent, render } from '@testing-library/react'


test('renders the correect content', () => {
    const { getByText, getByLabelText } = render(<Todo />)

    expect(getByText('TODOS')).not.toBeNull()
    expect(getByLabelText('What needs to be done?')).not.toBeNull()
    expect(getByText('Add #1')).not.toBeNull()
})

// using fireEvent to simulate user events

test('allows users to add items to there list', () => {
    const { getByText, getByLabelText } = render(<Todo />)
    const input = getByLabelText('What needs to be done?')
    fireEvent.change(input, { target: { value: 'RTL Presentation Slides' } })
    fireEvent.click(getByText('Add #1'))
    getByText('RTL Presentation Slides')
    getByText('Add #2')
})
