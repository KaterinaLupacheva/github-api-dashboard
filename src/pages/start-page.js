import React from 'react';
import styled from 'styled-components';
import UserInput from '../components/user-input/user-input.component';

const StartPageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartPage = () => (
  <StartPageContainer>
    <UserInput />
  </StartPageContainer>
);

export default StartPage;
