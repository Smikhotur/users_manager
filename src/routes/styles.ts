import styled from 'styled-components';
import { EColors } from '../ENUM/Enum';

interface IElementsShopPage {
  Wrapper?: any;
  Main?: any;
}

export const S: IElementsShopPage = {};

S.Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1330px;
  width: 100%;
  background-color: ${EColors.mainBackground};
`;

S.Main = styled.main`
  min-height: calc(100vh - 120px);
  padding: 20px;
`;
