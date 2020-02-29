import React from 'react';
import { UserInfoContainer } from './user-info.styles';
import { IconContext } from 'react-icons';
import { TiBriefcase } from 'react-icons/ti';
import { MdLocationOn } from "react-icons/md";
import { GoLink } from "react-icons/go";

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
        <div className="item">
          <IconContext.Provider value={{ size: '2em', color: 'white' }}>
            <TiBriefcase />
          </IconContext.Provider>
          {userInfo.company}
        </div>
        <div className='item'>
          <IconContext.Provider value={{ size: '2em', color: 'white'}}>
            <MdLocationOn />
          </IconContext.Provider>
          {userInfo.location}
        </div>
        <div className='item'>
          <IconContext.Provider value={{ size: '2em', color: 'white'}}>
            <GoLink />
          </IconContext.Provider>
          <a href={`http://${userInfo.blog}`} target="_blank" rel="noopener noreferrer">
          {userInfo.blog}
          </a> 
        </div>
        <div className='item'>
        <IconContext.Provider value={{ size: '2em', color: 'white'}}>
          </IconContext.Provider>
        </div>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
