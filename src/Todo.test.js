import React from 'react';
import Todo from './Todo';
import { render } from '@testing-library/react'




test('renders the correect content', () => {
    const { getByText, getByLabelText } = render(<Todo />)

    expect(getByText('TODOS')).not.toBeNull()
    expect(getByLabelText('What needs to be done?')).not.toBeNull()
    expect(getByText('Add #1')).not.toBeNull()
})
