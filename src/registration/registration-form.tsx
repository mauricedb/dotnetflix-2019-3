import React from 'react';

const RegistrationForm = () => {
  return (
    <div>
      <h2>Registration</h2>
      <div>
        <label htmlFor="firstName">Firstname</label>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Lastname</label>
        <input type="text" id="lastName" name="lastName" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="NL">Netherlands</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" />
      </div>
      <div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
