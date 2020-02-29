import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UserPage = props => {
  const location = useLocation();

  useEffect(() => {
    const user = location.state.user;
    fetch(`https://api.github.com/users/${user}`)
      .then(response => response.json())
      .then(response => console.log(JSON.stringify(response, null, 2)));
  });

  return <div>USER PAGE</div>;
};

export default UserPage;
