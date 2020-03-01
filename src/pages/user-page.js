import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/user-info/user-info.component';
import { fetchData } from '../utils/fetchData';

const UserPage = props => {
  const [error, setIsError] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const userIn = await fetchData(`https://api.github.com/users/${location.state.user}`);
        setUserInfo(userIn);
        const repos = await fetchData(`https://api.github.com/users/${location.state.user}/repos`);
        setRepoData(repos);
      } catch (error) {
        setIsError(true);
      }
    };
    getData();
  }, [location.state.user]);

  return (
    <div>
      {error ? (
        <div>{'ERROR'}</div>
      ) : (
        <>{userInfo && repoData && <UserInfo userInfo={userInfo} repo={repoData} />}</>
      )}
    </div>
  );
};

export default UserPage;
