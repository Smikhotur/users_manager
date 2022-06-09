import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IElementsMain {
  Inner?: any;
  BoxTitle?: any;
  Title?: any;
  BtnAddUser?: any;
  InnerOval?: any;
}

export const S: IElementsMain = {};

S.Inner = styled.section``;

S.BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.Title = styled.h1`
  letter-spacing: 2px;
  font-size: 24px;
  align-self: center;

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 568px) {
    font-size: 20px;
  }
`;

S.BtnAddUser = styled.button`
  position: relative;
  z-index: 2;
  padding: 10px 15px;
  background-color: ${EColors.headerBackground};
  color: ${EColors.waite};
  text-transform: uppercase;
  border-radius: 8px;

  &:hover {
    background-color: ${EColors.orangeNavigation};
    cursor: pointer;
  }
`;

S.InnerOval = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
`;
