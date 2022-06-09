import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IElementsDetails {
  WrapperDetails?: any;
  DetailsHeader?: any;
  DetailsTitle?: any;
  EditBtn?: any;
  MainContent?: any;
  AvatarInner?: any;
  Avatar?: any;
  AvatarTitle?: any;
  Desc?: any;
  WrapperForm?: any;
}

export const S: IElementsDetails = {};

S.WrapperDetails = styled.section``;
S.DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 30px;
`;

S.DetailsTitle = styled.h3`
  letter-spacing: 2px;
  font-size: 24px;
`;

S.EditBtn = styled.button`
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

S.MainContent = styled.div`
  display: flex;

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
  }
`;

S.AvatarInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.Avatar = styled.img`
  max-width: 150px;
`;

S.AvatarTitle = styled.div`
  margin-top: 20px;
`;

S.Desc = styled.div`
  padding-left: 30px;
`;

S.WrapperForm = styled.div`
  display: flex;
  justify-content: center;
`;
