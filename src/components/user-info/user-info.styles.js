import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const UserInfoContainer = styled.div`
  .user-name {
    color: ${colors.textColor};
    font-size: ${fontSizes.large};
  }

  .avatar {
    border-radius: 100%;
    width: 150px;
    height: 150px;
  }

  .bio {
    color: ${colors.whiteColor};
    font-size: ${fontSizes.small};
  }

  .user-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .item {
      color: ${colors.whiteColor};
      font-size: ${fontSizes.small};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;
