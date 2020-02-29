import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './user-input.styles.scss';
import { UserInputForm } from './user-input.styles';

const UserInput = () => {
  const [user, setUser] = useState('');
  const onInputChange = e => setUser(e.target.value);
  const history = useHistory();

  const onInputSubmit = e => {
    e.preventDefault();
    history.push({
      pathname: '/user',
      state: { user },
    });
  };

  return (
    <UserInputForm className="user-input-form" onSubmit={onInputSubmit}>
      <label className="user-input-label" htmlFor="username">
        Enter GitHub's Username
      </label>
      <input className="user-input" type="text" name="username" onChange={onInputChange} />
      <button className="user-input-button" onClick={onInputSubmit}>
        Submit
      </button>
    </UserInputForm>
  );
};

export default UserInput;
