import React from 'react';
import { UserInfoContainer } from './user-info.styles';
import { IconContext } from 'react-icons';
import { TiBriefcase } from 'react-icons/ti';

const UserInfo = ({ userInfo }) => {
  console.log('User ' + JSON.stringify(userInfo, null, 2));

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
        <div className="company">
          <IconContext.Provider value={{ size: '2em', color: 'white' }}>
            <TiBriefcase />
          </IconContext.Provider>
          {userInfo.company}
        </div>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
