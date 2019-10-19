import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import RegistrationForm from './registration-form';

describe('The RegistrationForm', () => {
  test('render the empty registration form', () => {
    const { getByText, getByLabelText } = render(<RegistrationForm />);

    expect(getByText('Registration')).toBeVisible();
    expect(getByText('Register')).toBeVisible();
    expect(getByLabelText('Firstname')).toBeVisible();
    expect(getByLabelText('Lastname')).toBeVisible();
    expect(getByLabelText('Country')).toBeVisible();
    expect(getByLabelText('State')).toBeVisible();
  });
});
