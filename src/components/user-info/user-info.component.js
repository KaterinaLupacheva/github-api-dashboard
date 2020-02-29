import React from 'react';
import { UserInfoContainer } from './user-info.styles';

const UserInfo = ({ userInfo }) => (
  <UserInfoContainer>
    <img className="avatar" src={userInfo.avatar_url} alt="user-avatar" />
  </UserInfoContainer>
);

export default UserInfo;
