import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from '../../src/components/Header';

describe('Header component', () => {
  it('Should redirect to home', () => {
    const { getByText } = render(<Header />);
    fireEvent.click(getByText('Axur News.'));

    expect(window.location.pathname).toBe('/');
  });
});
