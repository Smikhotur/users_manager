import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IStylesHeader {
  Footer?: any;
  // LogoWrapper?: any;
  // Logo?: any;
  // LogoText?: any;
  // Nav?: any;
  // List?: any;
  // Item?: any;
  // Link?: any;
}

interface Props {
  transform: string;
}

export const S: IStylesHeader = {};

S.Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 25px;
  background-color: ${EColors.headerBackground};
  color: ${EColors.waite};

  > div {
    width: 100%;
    text-align: center;
  }
`;
