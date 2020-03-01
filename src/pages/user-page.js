import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/user-info/user-info.component';
import { fetchData, fetchAllLanguages } from '../utils/fetchData';

const UserPage = props => {
  const [error, setIsError] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [languages, setLanguages] = useState(null);
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    const getData = async () => {
      try {
        //fetch user info
        const userIn = await fetchData(`https://api.github.com/users/${user}`);
        setUserInfo(userIn);
        //fetch user's repos
        const repos = await fetchData(`https://api.github.com/users/${user}/repos`);
        //fetch languages of all repos
        const lan = await fetchAllLanguages(repos, user);
        setLanguages(lan);
      } catch (error) {
        setIsError(true);
      }
    };
    getData();
  }, [user]);

  return (
    <div>
      {error ? (
        <div>{'ERROR'}</div>
      ) : (
        <>{(userInfo || languages) && <UserInfo userInfo={userInfo} languages={languages} />}</>
      )}
    </div>
  );
};

export default UserPage;
