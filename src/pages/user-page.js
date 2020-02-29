import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserPage = props => {
  const [error, setError] = useState({ active: false, status: 200 });
  const [userInfo, setUserInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const user = location.state.user;
    fetch(`https://api.github.com/users/${user}`)
      .then(resp => {
        if (resp.status === 403) {
          return setError({ active: true, status: 403 });
        }
        if (resp.status === 404) {
          return setError({ active: true, status: 404 });
        }
        return resp.json();
      })
      .then(json => setUserInfo(json))
      .catch(error => setError({ active: true, status: 400 }));
  });

  return (
    <div>
      {error && error.active ? (
        <div>{error.status}</div>
      ) : (
        <>{userInfo && <img src={userInfo.avatar_url} alt="user-avatar" />}</>
      )}
    </div>
  );
};

export default UserPage;
