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
    <div className="card" style={{ marginTop: 24 }}>
      <div className="card-header">
        <h2>Registration</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="firstName">Firstname</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Lastname</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={person.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
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
          <div className="form-group">
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

        <div className="float-right">
          <button
            disabled={!person.firstName || !person.lastName}
            onClick={() => onRegister && onRegister(person)}
            className="btn btn-primary"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

RegistrationForm.defaultProps = {
  person: { firstName: '', lastName: '', country: 'NL', state: '' }
};

type Person = typeof RegistrationForm.defaultProps.person;

export default RegistrationForm;
