import React from 'react';

const UserInfo = ({ userInfo }) => (
  <div>
    <img src={userInfo.avatar_url} alt="user-avatar" />
  </div>
);

export default UserInfo;
