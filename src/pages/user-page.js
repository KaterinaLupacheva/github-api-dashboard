import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/user-info/user-info.component';
import UserLanguages from '../components/user-languages/user-languages.component';

const UserPage = props => {
  const [error, setError] = useState({ active: false, status: 200 });
  const [userInfo, setUserInfo] = useState(null);
  const [languagesTotal, setLanguagesTotal] = useState(null);
  const location = useLocation();

  useEffect(() => {
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
        .then(json => json.forEach(js => getLanguages(js.name)))
        .then(() => setLanguagesTotal(languages))
        .catch(error => setError({ active: true, status: 400 }));
    };

    let languages = {};

    const getLanguages = repoName => {
      fetch(`https://api.github.com/repos/KaterinaLupacheva/${repoName}/languages`)
        .then(resp => resp.json())
        .then(json => {
          for (let [key, value] of Object.entries(json)) {
            if (languages[key]) {
              languages[key] += value;
            } else {
              languages[key] = value;
            }
          }
        });
    };

    getUserInfo();
    getRepos();
  }, [location.state.user]);

  return (
    <div>
      {error && error.active ? (
        <div>{error.status}</div>
      ) : (
        <>
          {userInfo && <UserInfo userInfo={userInfo} />}
          {languagesTotal && <UserLanguages languages={languagesTotal} />}
        </>
      )}
    </div>
  );
};

export default UserPage;
