import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import RegistrationForm from './registration-form';

describe('The RegistrationForm', () => {
  test('render the empty registration form', () => {
    const { getByText, getByLabelText, queryByLabelText } = render(
      <RegistrationForm />
    );

    expect(getByText('Registration')).toBeVisible();
    expect(getByText('Register')).toBeDisabled();
    expect(getByLabelText('Firstname')).toBeVisible();
    expect(getByLabelText('Lastname')).toBeVisible();
    expect(getByLabelText('Country')).toBeVisible();
    expect(queryByLabelText('State')).not.toBeInTheDocument();
  });

  test('render the populated registration form', () => {
    const person = {
      firstName: 'Maurice',
      lastName: 'de Beijer',
      country: 'NL',
      state: ''
    };
    const { getByText, getByLabelText, queryByLabelText } = render(
      <RegistrationForm person={person} />
    );

    expect(getByText('Registration')).toBeVisible();
    expect(getByText('Register')).toBeEnabled();
    expect(getByLabelText('Firstname')).toHaveValue('Maurice');
    expect(getByLabelText('Lastname')).toHaveValue('de Beijer');
    expect(getByLabelText('Country')).toHaveValue('NL');
    expect(queryByLabelText('State')).not.toBeInTheDocument();
  });

  test('render the USA based populated registration form', () => {
    const person = {
      firstName: 'Chuck',
      lastName: 'Norris',
      country: 'USA',
      state: 'Texas'
    };
    const { getByText, getByLabelText } = render(
      <RegistrationForm person={person} />
    );

    expect(getByText('Registration')).toBeVisible();
    expect(getByText('Register')).toBeVisible();
    expect(getByLabelText('Firstname')).toHaveValue('Chuck');
    expect(getByLabelText('Lastname')).toHaveValue('Norris');
    expect(getByLabelText('Country')).toHaveValue('USA');
    expect(getByLabelText('State')).toHaveValue('Texas');
  });

  test('register a person', () => {
    const onRegister = jest.fn();
    const { getByText, getByLabelText } = render(
      <RegistrationForm onRegister={onRegister} />
    );

    fireEvent.change(getByLabelText('Firstname'), {
      target: { name: 'firstName', value: 'Mike' }
    });
    fireEvent.change(getByLabelText('Lastname'), {
      target: { name: 'lastName', value: 'Jones' }
    });

    fireEvent.click(getByText('Register'));

    expect(onRegister).toHaveBeenCalledWith({
      firstName: 'Mike',
      lastName: 'Jones',
      country: 'NL',
      state: ''
    });
  });
});
