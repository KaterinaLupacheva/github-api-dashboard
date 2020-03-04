import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HamburgerMenuIcon from '../components/sidebar/hamburger-menu-icon.component';
import Sidebar from '../components/sidebar/sidebar.component';
import UserInfo from '../components/user-info/user-info.component';
import RateLimit from '../components/rate-limit/rate-limit.component';
import Error from '../components/error/error.component';
import { fetchData, fetchAllLanguages } from '../utils/fetchData';
import LanguagesPage from './languages-page';
import FollowersPage from './followers-page';
import ReposPage from './repos-page';

const UserPage = props => {
  const [error, setIsError] = useState({ active: false, type: 200 });
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);
  const [userIsPressed, setUserIsPressed] = useState(true);
  const [languagesIsPressed, setLanguagesIsPressed] = useState(false);
  const [followersIsPressed, setFollowersIsPressed] = useState(false);
  const [reposIsPressed, setReposIsPressed] = useState(false);
  const location = useLocation();
  const user = location.state.user;

  const togglePressed = e => {
    switch (e) {
      case 'User':
        setUserIsPressed(true);
        setLanguagesIsPressed(false);
        setFollowersIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Languages':
        setUserIsPressed(false);
        setLanguagesIsPressed(true);
        setFollowersIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Followers':
        setUserIsPressed(false);
        setFollowersIsPressed(true);
        setLanguagesIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Repositories':
        setUserIsPressed(false);
        setLanguagesIsPressed(false);
        setFollowersIsPressed(false);
        setReposIsPressed(true);
        break;
      default:
        setUserIsPressed(true);
        setLanguagesIsPressed(false);
        setFollowersIsPressed(false);
        setReposIsPressed(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        //fetch number of requests left
        const rateLimit = await fetchData(`https://api.github.com/rate_limit`);
        setRateLimit(rateLimit.resources.core);
        if (rateLimit.resources.core.remaining < 1) {
          setIsError({ active: true, status: 403 });
        }
        //fetch user info
        const userInfo = await fetchData(`https://api.github.com/users/${user}`);
        setUserInfo(userInfo);
        //fetch user's repos
        const repos = await fetchData(`https://api.github.com/users/${user}/repos?per_page=100`);
        setUserRepos(repos);
        //fetch languages of all repos
        const lan = await fetchAllLanguages(repos, user);
        setLanguages(lan);
      } catch (error) {
        setIsError({ active: true, status: 404 });
      }
    };
    getData();
  }, [user]);

  return (
    <div>
      {error && error.active ? (
        <Error error={error} />
      ) : (
        <>
          <HamburgerMenuIcon />
          <Sidebar
            handleClick={togglePressed}
            languagesIsPressed={languagesIsPressed}
            followersIsPressed={followersIsPressed}
            reposIsPressed={reposIsPressed}
            userIsPressed={userIsPressed}
            user={user}
          >
            {rateLimit && <RateLimit rateLimit={rateLimit} />}
            {userIsPressed && (userInfo || languages) && <UserInfo userInfo={userInfo} />}
            {languages && languagesIsPressed && <LanguagesPage languages={languages} />}
            {followersIsPressed && (
              <FollowersPage
                user={user}
                followersNum={userInfo.followers}
                setError={() => setIsError(true)}
              />
            )}
            {userRepos && reposIsPressed && (
              <ReposPage userRepos={userRepos} reposNum={userInfo.public_repos} />
            )}
          </Sidebar>
        </>
      )}
    </div>
  );
};

export default UserPage;
