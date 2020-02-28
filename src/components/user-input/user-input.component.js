import React, { useState } from 'react';
import './user-input.styles.scss';

const UserInput = () => {
  const [user, setUser] = useState('');
  const onInputChange = e => setUser(e.target.value);

  const onInputSubmit = e => {
    e.preventDefault();
    console.log('USER ' + user);
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response, null, 2)));
  };

  return (
    <form className="user-input-form" onSubmit={onInputSubmit}>
      <label className="user-input-label" htmlFor="username">
        Enter GitHub's Username
      </label>
      <input className="user-input" type="text" name="username" onChange={onInputChange} />
      <button className="user-input-button" onClick={onInputSubmit}>
        Submit
      </button>
    </form>
  );
};

export default UserInput;
