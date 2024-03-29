import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenuIcon from '../components/sidebar/hamburger-menu-icon.component';
import Sidebar from '../components/sidebar/sidebar.component';
import UserInfo from '../components/user-info/user-info.component';
import RateLimit from '../components/rate-limit/rate-limit.component';
import Error from '../components/error/error.component';
import { fetchData } from '../utils/fetchData';
import LanguagesPage from './languages-page';
import ReposPage from './repos-page';
import { Header } from './user-page.styles';
import { mockUser, mockRepos } from '../utils/mockdata';

const UserPage = props => {
  const [useMockData, setUseMockData] = useState(false);
  const [menuIsOpen, toggleMenuIsOpen] = useState(true);
  const [header, setHeader] = useState('home');
  const [repoCardIsOpened, setRepocardIsOpened] = useState(false);
  const [error, setIsError] = useState({ active: false, type: 200 });
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);
  const [userIsPressed, setUserIsPressed] = useState(true);
  const [languagesIsPressed, setLanguagesIsPressed] = useState(false);
  const [reposIsPressed, setReposIsPressed] = useState(false);
  const location = useLocation();
  const user = useMockData ? '' : location.state.user;

  const togglePressed = e => {
    switch (e) {
      case 'User':
        setUserIsPressed(true);
        setLanguagesIsPressed(false);
        setReposIsPressed(false);
        break;
      case 'Languages':
        setUserIsPressed(false);
        setLanguagesIsPressed(true);
        setReposIsPressed(false);
        break;
      case 'Repositories':
        setUserIsPressed(false);
        setLanguagesIsPressed(false);
        setReposIsPressed(true);
        break;
      default:
        setUserIsPressed(true);
        setLanguagesIsPressed(false);
        setReposIsPressed(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 800) {
      toggleMenuIsOpen(!menuIsOpen);
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        //fetch number of requests left
        const rateLimit = await fetchData(`https://api.github.com/rate_limit`, setIsError);
        setRateLimit(rateLimit.resources.core);
        if (rateLimit.resources.core.remaining < 1) {
          setIsError({ active: true, status: 403 });
        }
        //fetch user info
        const userInfo = await fetchData(`https://api.github.com/users/${user}`, setIsError);
        setUserInfo(userInfo);
        //fetch user's repos
        const repos = await fetchData(
          `https://api.github.com/users/${user}/repos?per_page=100`,
          setIsError
        );
        setUserRepos(repos);
      } catch (error) {
        setIsError({ active: true, status: 404 });
      }
    };
    if (!useMockData) {
      getData();
    } else {
      setIsError({ ...error, active: false });
      togglePressed('User');
      setUserInfo(mockUser);
      setUserRepos(mockRepos);
    }
    return () => setUseMockData(false);
  }, [user, useMockData]);
  console.log(error, useMockData);
  return (
    <div>
      {error && error.active && !useMockData ? (
        <Error error={error} rateLimit={rateLimit} mockdata={() => setUseMockData(true)} />
      ) : (
        <>
          <HamburgerMenuIcon isOpen={menuIsOpen} toggleMenu={() => toggleMenuIsOpen(!menuIsOpen)} />
          <Sidebar
            isOpen={menuIsOpen}
            handleClick={togglePressed}
            languagesIsPressed={languagesIsPressed}
            reposIsPressed={reposIsPressed}
            userIsPressed={userIsPressed}
            user={useMockData ? 'MOCK DATA' : user}
          >
            <Header>
              {header === 'home' ? (
                <Link to="/" className="home">
                  Home
                </Link>
              ) : (
                <div
                  className="home"
                  onClick={() => {
                    setRepocardIsOpened(false);
                    setHeader('home');
                  }}
                >
                  Back
                </div>
              )}

              {rateLimit && <RateLimit rateLimit={rateLimit} />}
            </Header>

            {userIsPressed && userInfo && <UserInfo userInfo={userInfo} />}

            {languagesIsPressed && (
              <LanguagesPage user={user} repos={userRepos} useMockData={useMockData} />
            )}

            {userRepos && reposIsPressed && (
              <ReposPage
                userRepos={userRepos}
                reposNum={userInfo.public_repos}
                user={user}
                setError={() => setIsError({ active: true, status: 404 })}
                setHeader={() => setHeader('back')}
                setRepoCardIsOpened={() => setRepocardIsOpened(true)}
                repoCardIsOpened={repoCardIsOpened}
                useMockData={useMockData}
              />
            )}
          </Sidebar>
        </>
      )}
    </div>
  );
};

export default UserPage;
