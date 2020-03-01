import React, { useEffect, useState } from 'react';
import { UserInfoContainer } from './user-info.styles';
import { IconContext } from 'react-icons';
import { TiBriefcase } from 'react-icons/ti';
import { MdLocationOn } from 'react-icons/md';
import { GoLink } from 'react-icons/go';
import { GoCalendar } from 'react-icons/go';

const UserInfo = ({ userInfo, repo }) => {
  const [languages, setLanguages] = useState([]);
  const lang = {};

  const fetchUrl = async url => {
    const languages = await fetch(url);
    const data = await languages.json();
    return data;
  };

  const fetchLanguages = async names => {
    const requests = names.map(async name => {
      const url = `https://api.github.com/repos/KaterinaLupacheva/${name}/languages`;
      const a = await fetchUrl(url);
      return a;
    });
    return Promise.all(requests);
  };

  const combineLanguages = data => {
    for (let [key, value] of Object.entries(data)) {
      if (lang[key]) {
        lang[key] += value;
      } else {
        lang[key] = value;
      }
    }
  };

  useEffect(() => {
    const names = repo.filter(r => !r.fork).map(rep => rep.name);
    fetchLanguages(names)
      .then(a => {
        a.forEach(ar => combineLanguages(ar));
      })
      .then(j => setLanguages(lang));
  }, []);

  return (
    <UserInfoContainer>
      <div className="user-name">{userInfo.name}</div>
      <img className="avatar" src={userInfo.avatar_url} alt="user-avatar" />
      <h2>
        <a href={userInfo.html_url} target="_blank" rel="noopener noreferrer">
          @{userInfo.login}
        </a>
      </h2>
      <div className="bio">{userInfo.bio}</div>

      <div className="user-row">
        {userInfo.company && (
          <div className="item">
            <IconContext.Provider value={{ size: '2em', color: 'white' }}>
              <TiBriefcase />
            </IconContext.Provider>
            {userInfo.company}
          </div>
        )}
        {userInfo.location && (
          <div className="item">
            <IconContext.Provider value={{ size: '2em', color: 'white' }}>
              <MdLocationOn />
            </IconContext.Provider>
            {userInfo.location}
          </div>
        )}
        {userInfo.blog && (
          <div className="item">
            <IconContext.Provider value={{ size: '2em', color: 'white' }}>
              <GoLink />
            </IconContext.Provider>
            <a
              href={
                userInfo.blog.slice(0, 4) === 'http'
                  ? `${userInfo.blog}`
                  : `http://${userInfo.blog}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {userInfo.blog}
            </a>
          </div>
        )}
        {userInfo.created_at && (
          <div className="item">
            <IconContext.Provider value={{ size: '2em', color: 'white' }}>
              <GoCalendar />
              Joined{' '}
              {new Date(userInfo.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </IconContext.Provider>
          </div>
        )}
      </div>

      <div className="user-info-cards">
        {userInfo.followers && (
          <div className="card">
            <span>{userInfo.followers}</span>
            <span>Followers</span>
          </div>
        )}
        {userInfo.public_repos && (
          <div className="card">
            <span>{userInfo.public_repos}</span>
            <span>Repositories</span>
          </div>
        )}
        {languages && (
          <div className="card">
            <span>{Object.keys(languages).length}</span>
            <span>Languages Used</span>
          </div>
        )}
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
