import React, { useState } from 'react';
import { UserInfoContainer, CardButton } from './user-info.styles';
import { IconContext } from 'react-icons';
import { TiBriefcase } from 'react-icons/ti';
import { MdLocationOn } from 'react-icons/md';
import { GoLink } from 'react-icons/go';
import { GoCalendar } from 'react-icons/go';

const UserInfo = ({ userInfo, languages, languagesIsPressed, toggleLanguagesIsPressed }) => {
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
        {languages && (
          <CardButton
            className={`${languagesIsPressed ? 'pressed' : ''} card`}
            onClick={toggleLanguagesIsPressed}
          >
            <span>{Object.keys(languages).length}</span>
            <span>Languages Used</span>
          </CardButton>
        )}
        {userInfo.followers && (
          <CardButton className="card">
            <span>{userInfo.followers}</span>
            <span>Followers</span>
          </CardButton>
        )}
        {userInfo.public_repos && (
          <CardButton className="card">
            <span>{userInfo.public_repos}</span>
            <span>Repositories</span>
          </CardButton>
        )}
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
