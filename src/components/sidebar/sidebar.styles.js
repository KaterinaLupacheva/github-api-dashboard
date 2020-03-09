import styled from 'styled-components';
import { colors } from '../../global.styles';

export const SidebarContainer = styled.div`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? `0` : `-20vw`)};
  width: 20vw;
  height: 100%;
  background: ${colors.backgroundLightDark};
  transition: all 0.5s ease;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;
  }

  header {
    white-space: nowrap;
    width: 20vw;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 2vw;
    color: ${colors.textColor};
    text-align: center;
    line-height: 70px;
    background: #063146;
    user-select: none;
  }
`;

export const SectionContainer = styled.section`
  transition: all 0.5s;
  height: 100vh;
  margin-left: ${({ isOpen }) => (isOpen ? `20vw` : `0`)};
`;
