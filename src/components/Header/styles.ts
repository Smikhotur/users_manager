import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IStylesHeader {
  Header?: any;
  LogoWrapper?: any;
  Logo?: any;
  LogoText?: any;
  Nav?: any;
  List?: any;
  Item?: any;
  Link?: any;
}

interface Props {
  transform: string;
}

export const S: IStylesHeader = {};

S.Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 25px;
  background-color: ${EColors.headerBackground};
  color: ${EColors.waite};
`;

S.LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

S.Logo = styled.img`
  width: 60px;
`;

S.LogoText = styled.span`
  font-size: 17px;
  letter-spacing: 2px;
  color: ${EColors.yellowLogo};
  font-family: assassin-st, sans-serif;
`;

S.Nav = styled.nav`
  width: 100%;
`;

S.List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

S.Item = styled.li`
  letter-spacing: 1.5px;
  margin-right: 20px;
  white-space: nowrap;

  &:last-child {
    margin-right: 0px;
  }
`;

S.Link = styled(Link)<Props>`
  position: relative;
  padding: 8px;
  text-decoration: none;
  text-transform: capitalize;
  color: ${EColors.waite};
  border-bottom: 1px solid transparent;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    background-color: ${EColors.yellowLogo};
    height: 2px;
    bottom: -5px;
    transform: scale(${({ transform }) => transform});
    transform-origin: center center;
    transition: transform 0.5s;
  }

  &:hover {
    color: ${EColors.orangeNavigation};
  }
`;
