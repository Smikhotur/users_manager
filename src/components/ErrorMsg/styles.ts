import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IErrorMsg {
  ErrorText?: any;
}

export const S: IErrorMsg = {};

S.ErrorText = styled.ul`
  position: absolute;
  bottom: 4px;
  left: 5px;
  color: ${EColors.orangeNavigation};
  font-size: 12px;
  letter-spacing: 1.5px;
`;
