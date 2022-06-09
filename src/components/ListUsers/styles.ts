import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IElementsListUsers {
  List?: any;
  Item?: any;
  Link?: any;
  InnerAvatar?: any;
  ImgAvatar?: any;
  FullName?: any;
  Desc?: any;
  ImgRemoveUser?: any;
}

export const S: IElementsListUsers = {};

S.List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
`;

S.Item = styled.li`
  margin-bottom: 30px;
  border: 1px solid transparent;
  padding: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border-radius: 8px;
    border: 1px solid ${EColors.orangeNavigation};
    transition: all 0.4s;
  }
`;

S.Link = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  color: ${EColors.headerBackground};
  text-decoration: none;
  cursor: pointer;
`;

S.InnerAvatar = styled.div`
  display: flex;
  align-items: center;
`;

S.ImgAvatar = styled.img`
  width: 40px;
`;

S.FullName = styled.div`
  margin-left: 20px;
`;

S.Desc = styled.div`
  padding-left: 35px;
  align-self: center;
`;

S.ImgRemoveUser = styled.img`
  justify-self: flex-end;
  align-self: center;
  padding-right: 45px;
`;
