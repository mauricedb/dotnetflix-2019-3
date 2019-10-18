import React from 'react';

const RegistrationForm = ({ person: initalPerson, onRegister }: any) => {
  const [person, setPerson] = React.useState<Person>(initalPerson);

  const handleChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setPerson((p: Person) => ({ ...p, [name]: value }));
  };

  return (
    <div>
      <h2>Registration</h2>
      <div>
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={person.country}
          onChange={handleChange}
        >
          <option value="NL">Netherlands</option>
          <option value="USA">USA</option>
        </select>
      </div>
      {person.country === 'USA' && (
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={person.state}
            onChange={handleChange}
          />
        </div>
      )}

      <div>
        <button
          disabled={!person.firstName || !person.lastName}
          onClick={() => onRegister && onRegister(person)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

RegistrationForm.defaultProps = {
  person: { firstName: '', lastName: '', country: 'NL', state: '' }
};

type Person = typeof RegistrationForm.defaultProps.person;

export default RegistrationForm;
