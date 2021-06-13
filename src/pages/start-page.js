import React from 'react';
import styled from 'styled-components';
import UserInput from '../components/user-input/user-input.component';
import Footer from '../components/footer/footer.component';

const StartPageContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartPage = () => (
  <>
    <StartPageContainer>
      <UserInput />
    </StartPageContainer>
    <Footer />
  </>
);

export default StartPage;
