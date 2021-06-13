import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const SidebarOptionContainer = styled.li`
  display: block;
  text-decoration: none;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: ${fontSizes.small};
  color: ${colors.whiteColor};
  padding-left: 40px;
  cursor: pointer;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transition: 0.4s;

  &:hover {
    padding-left: 50px;
  }

  svg {
    margin-right: 16px;
  }

  &.pressed {
    background-color: ${colors.whiteColor};
    padding-left: 50px;
    font-weight: bold;
    color: #063146;
  }
`;
