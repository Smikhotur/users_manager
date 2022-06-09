import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IElementsForm {
  Form?: any;
  FormTitle?: any;
  FormInput?: any;
  FormTextarea?: any;
  FormButton?: any;
}

export const S: IElementsForm = {};

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  min-width: 240px;
  max-width: 440px;

  > label {
    position: relative;
  }
`;
S.FormTitle = styled.h3`
  font-size: 24px;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`;
S.FormInput = styled.input`
  margin-bottom: 25px;
  padding: 6px 10px;
  border-bottom: 2px solid ${EColors.orangeNavigation};
  background-color: transparent;
  width: 100%;
  outline: none;
`;
S.FormTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  padding: 6px 10px;
  border-bottom: 2px solid ${EColors.orangeNavigation};
  background-color: transparent;
  resize: none;
  outline: none;
`;
S.FormButton = styled.button`
  letter-spacing: 2px;
  margin-top: 25px;
  text-transform: uppercase;
  padding: 6px 0;
  background-color: ${EColors.orangeNavigation};
`;
