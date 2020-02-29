import React from 'react';
import { UserInfoContainer } from './user-info.styles';

const UserInfo = ({ userInfo }) => {
  console.log('User ' + JSON.stringify(userInfo, null, 2));

  return (
    <UserInfoContainer>
      <div className="user-name">{userInfo.name}</div>
      <img className="avatar" src={userInfo.avatar_url} alt="user-avatar" />
      <h2>
        <a href={userInfo.html_url} target="_blank">
          @{userInfo.login}
        </a>
      </h2>
      <div className="bio">{userInfo.bio}</div>
    </UserInfoContainer>
  );
};

export default UserInfo;
