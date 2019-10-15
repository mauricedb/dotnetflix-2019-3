import React from "react";

const RegistrationForm = () => {
  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: "",
    country: "NL",
    state: ""
  });

  const onChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPerson(person => ({ ...person, [target.name]: target.value }));
  };

  return (
    <form>
      <h2>Registration form</h2>
      <div>
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={e => onChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={e => onChange(e)}
        ></input>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select id="country" name="country" onChange={e => onChange(e)}>
          <option value="NL">Netherlands</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          onChange={e => onChange(e)}
        ></input>
      </div>
      <div>
        <button>Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
