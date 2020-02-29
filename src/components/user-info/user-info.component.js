import React from 'react';
import { UserAvatar } from './user-info.styles';

const UserInfo = ({ userInfo }) => (
  <div>
    <UserAvatar src={userInfo.avatar_url} alt="user-avatar" />
  </div>
);

export default UserInfo;
