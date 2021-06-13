import styled from 'styled-components';
import { colors, fontSizes, breakpoint } from '../../global.styles';

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

    @media only screen and (max-width: ${breakpoint}) {
      left: ${({ isOpen }) => (isOpen ? `40vw` : `1vmin`)};
    }
  }

  #cancel {
    z-index: 1111;
    left: ${({ isOpen }) => (isOpen ? `17vw` : `-20vw`)};
    margin-top: 17px;
    font-size: ${fontSizes.medium};
    color: ${colors.linkColor};
    padding: 4px 9px;
    transition: all 0.5s ease;

    @media only screen and (max-width: ${breakpoint}) {
      left: ${({ isOpen }) => (isOpen ? `34vw` : `-40vw`)};
    }
  }
`;
