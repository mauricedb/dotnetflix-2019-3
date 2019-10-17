import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import RegistrationForm from './registration-form';

describe('The RegistrationForm', () => {
  test('render the empty registration form', () => {
    const { getByText, getByLabelText } = render(<RegistrationForm />);

    expect(getByText('Registration')).toBeVisible();
    expect(getByText('Register')).toBeDisabled();
    expect(getByLabelText('Firstname')).toBeVisible();
    expect(getByLabelText('Lastname')).toBeVisible();
    expect(getByLabelText('Country')).toBeVisible();
    expect(getByLabelText('State')).toBeVisible();
  });

  test('render the populated registration form', () => {
    const person = {
      firstName: 'Maurice',
      lastName: 'de Beijer',
      country: 'NL',
      state: ''
    };
    const { getByText, getByLabelText } = render(
      <RegistrationForm person={person} />
    );

    expect(getByText('Registration')).toBeVisible();
    expect(getByText('Register')).toBeEnabled();
    expect(getByLabelText('Firstname')).toHaveValue('Maurice');
    expect(getByLabelText('Lastname')).toHaveValue('de Beijer');
    expect(getByLabelText('Country')).toHaveValue('NL');
    expect(getByLabelText('State')).toHaveValue('');
  });
});
