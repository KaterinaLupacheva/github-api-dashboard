import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { RepoCardDetailsContainer } from './repo-card-details.styles';

const RepoCardDetails = ({ goBack }) => {
  return (
    <RepoCardDetailsContainer>
      <div className="arrow-icon" onClick={goBack}>
        <IconContext.Provider value={{ color: 'white', size: '3em' }}>
          <FaArrowLeft />
        </IconContext.Provider>
      </div>
      BACK ARROW + CARD
    </RepoCardDetailsContainer>
  );
};

export default RepoCardDetails;
