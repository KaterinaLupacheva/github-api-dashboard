import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

const LegendContainer = styled.div`
  border: 1px solid ${colors.secondaryColor};
  width: 20vw;
  color: ${colors.whiteColor};
  font-size: ${fontSizes.small};
  padding: 2vmin;
`;

const Item = styled.span`
  margin-left: 2vmin;
`;

const Legend = () => {
  return (
    <LegendContainer>
      <div>
        <IconContext.Provider value={{ size: '.5em', color: `${colors.textColor}` }}>
          <FaCircle />
        </IconContext.Provider>
        <Item>{'By owner'}</Item>
      </div>
      <div>
        <IconContext.Provider value={{ size: '.5em', color: `${colors.backgroundLightDark}` }}>
          <FaCircle />
        </IconContext.Provider>
        <Item>{'By contributors'}</Item>
      </div>
    </LegendContainer>
  );
};

export default Legend;
