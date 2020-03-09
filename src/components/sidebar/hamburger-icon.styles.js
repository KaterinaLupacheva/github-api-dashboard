import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const HamburgerContainer = styled.div`
  #btn,
  #cancel {
    position: absolute;
    cursor: pointer;
    border-radius: 3px;
  }

  #btn {
    left: ${({ isOpen }) => (isOpen ? `20vw` : `1vmin`)};
    opacity: ${({ isOpen }) => (isOpen ? `0` : `1`)};
    margin-top: 3vmin;
    font-size: ${fontSizes.medium};
    color: ${colors.whiteColor};
    padding: 6px 12px;
    transition: all 0.5s;
  }

  #cancel {
    z-index: 1111;
    left: ${({ isOpen }) => (isOpen ? `17vw` : `-20vw`)};
    margin-top: 17px;
    font-size: ${fontSizes.medium};
    color: ${colors.linkColor};
    padding: 4px 9px;
    transition: all 0.5s ease;
  }
`;
