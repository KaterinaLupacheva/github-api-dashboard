import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HamburgerMenuIcon from '../components/sidebar/hamburger-menu-icon.component';
import Sidebar from '../components/sidebar/sidebar.component';
import UserInfo from '../components/user-info/user-info.component';
import RateLimit from '../components/rate-limit/rate-limit.component';
import PieChart from '../components/charts/pie-chart.component';
import Followers from '../components/followers/followers.component';
import Repos from '../components/repos/repos.component';
import { fetchData, fetchAllLanguages } from '../utils/fetchData';
import { dataForPieChart } from '../utils/prepareDataForChart';

const UserPage = props => {
  const [error, setIsError] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);
  const [languagesIsPressed, setLanguagesIsPressed] = useState(false);
  const [followersIsPressed, setFollowersIsPressed] = useState(false);
  const [reposIsPressed, setReposIsPressed] = useState(false);
  const location = useLocation();
  const user = location.state.user;

  const togglePressed = e => {
    switch (e) {
      case 'User':
        setLanguagesIsPressed(false);
        setFollowersIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Languages':
        setLanguagesIsPressed(true);
        setFollowersIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Followers':
        setFollowersIsPressed(true);
        setLanguagesIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Repositories':
        setLanguagesIsPressed(false);
        setFollowersIsPressed(false);
        setReposIsPressed(true);
        break;
      default:
        setLanguagesIsPressed(false);
        setFollowersIsPressed(false);
        setReposIsPressed(false);
    }
  };

  const handleClick = e => {
    console.log(e);
    togglePressed(e);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        //fetch number of requests left
        const rateLimit = await fetchData(`https://api.github.com/rate_limit`);
        setRateLimit(rateLimit.resources.core);
        if (rateLimit.resources.core.remaining < 1) {
          setIsError(true);
        }
        //fetch user info
        const userInfo = await fetchData(`https://api.github.com/users/${user}`);
        setUserInfo(userInfo);
        //fetch user's repos
        const repos = await fetchData(`https://api.github.com/users/${user}/repos`);
        setUserRepos(repos);
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
        <>
          <HamburgerMenuIcon />
          <Sidebar handleClick={handleClick}>
            {rateLimit && <RateLimit rateLimit={rateLimit} />}
            {(userInfo || languages) && (
              <UserInfo
                userInfo={userInfo}
                languages={languages}
                languagesIsPressed={languagesIsPressed}
                followersIsPressed={followersIsPressed}
                reposIsPressed={reposIsPressed}
                togglePressed={e => togglePressed(e)}
              />
            )}
            {languages && languagesIsPressed && <PieChart data={dataForPieChart(languages)} />}
            {followersIsPressed && <Followers user={user} setError={() => setIsError(true)} />}
            {userRepos && reposIsPressed && <Repos data={userRepos} />}
          </Sidebar>
        </>
      )}
    </div>
  );
};

export default UserPage;
