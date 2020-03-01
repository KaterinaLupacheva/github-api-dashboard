import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/user-info/user-info.component';

const UserPage = props => {
  const [error, setError] = useState({ active: false, status: 200 });
  const [userInfo, setUserInfo] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const location = useLocation();

  const getUserInfo = () => {
    fetch(`https://api.github.com/users/${location.state.user}`)
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
  };

  const getRepos = () => {
    fetch(`https://api.github.com/users/${location.state.user}/repos`)
      .then(resp => {
        if (resp.status === 403) {
          return setError({ active: true, status: 403 });
        }
        if (resp.status === 404) {
          return setError({ active: true, status: 404 });
        }
        return resp.json();
      })
      .then(json => setRepoData(json))
      .catch(error => setError({ active: true, status: 400 }));
  };

  useEffect(() => {
    getUserInfo();
    getRepos();
  }, [location.state.user]);

  return (
    <div>
      {error && error.active ? (
        <div>{error.status}</div>
      ) : (
        <>{userInfo && repoData && <UserInfo userInfo={userInfo} repo={repoData} />}</>
      )}
    </div>
  );
};

export default UserPage;
