import React from 'react';
import AddUser from './AddUser';
import { fireEvent, render } from '@testing-library/react'



test('renders without crashing', () => {
    const { getByText } = render(<AddUser />)

    expect(getByText('Enter Name')).not.toBeNull()
    expect(getByText('Add')).not.toBeNull()

})


test('prompts user for a name to be entered', () => {
    const { getByText, getByPlaceholderText } = render(<AddUser />)

    const input = getByPlaceholderText('Name')

    fireEvent.change(input, { target: { value: 'RTL Presentation Slides' } })
    fireEvent.click(getByText('Add'))
})
