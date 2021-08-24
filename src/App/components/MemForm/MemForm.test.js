import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemForm from './MemForm';

describe('<MemForm />', () => {
  test('it should mount', () => {
    render(<MemForm />);
    
    const memForm = screen.getByTestId('MemForm');

    expect(memForm).toBeInTheDocument();
  });
});