import styled from 'styled-components';
import { EColors } from '../../ENUM/Enum';

interface IElementsListUsers {
  Form?: any;
  FormWrapper?: any;
  FormTitle?: any;
  FormInput?: any;
  FormTextarea?: any;
  FormButton?: any;
}

export const S: IElementsListUsers = {};

const background = `background: -moz-linear-gradient(
    top,
    ${EColors.inputBackgroundBlack} 0%,
    ${EColors.inputBackground} 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, ${EColors.inputBackgroundBlack}),
    color-stop(100%, ${EColors.inputBackground})
  );
  background: -webkit-linear-gradient(
    top,
    ${EColors.inputBackgroundBlack} 0%,
    ${EColors.inputBackground} 100%
  );
  background: -o-linear-gradient(
    top,
    ${EColors.inputBackgroundBlack} 0%,
    ${EColors.inputBackground} 100%
  );
  background: -ms-linear-gradient(
    top,
    ${EColors.inputBackgroundBlack} 0%,
    ${EColors.inputBackground} 100%
  );
  background: linear-gradient(
    to bottom,
    ${EColors.inputBackgroundBlack} 0%,
    ${EColors.inputBackground} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${EColors.inputBackgroundBlack}, endColorstr=${EColors.inputBackground}, GradientType=0 );

  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }

  &::placeholder {
    text-shadow: 1px 1px 1px ${EColors.mainBackground};
  }
`;

const styleForInput = `
  padding: 1em 2em;
  letter-spacing: 1.5px;
  font-weight: 300;
  margin-bottom: 20px;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  color: ${EColors.waite};
  font-size: 0.8rem;
  font-family: Open Sans, Arial, sans-serif;
  border-radius: 8px;
  resize: none;
  background: ${EColors.inputBackgroundBlack};
`;

S.FormWrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 24%);
`;

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 2em;
  position: relative;
  border-radius: 3px;
  border: 1px solid ${EColors.headerBackgroundBlack};
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: ${EColors.headerBackgroundBlack};
  background: -moz-linear-gradient(
    left,
    ${EColors.headerBackgroundBlack} 0%,
    ${EColors.headerBackground} 29%,
    ${EColors.headerBackground} 50%,
    ${EColors.headerBackground} 71%,
    ${EColors.headerBackgroundBlack} 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, ${EColors.headerBackgroundBlack}),
    color-stop(29%, ${EColors.headerBackground}),
    color-stop(50%, ${EColors.headerBackground}),
    color-stop(71%, ${EColors.headerBackground}),
    color-stop(100%, ${EColors.headerBackgroundBlack})
  );
  background: -webkit-linear-gradient(
    left,
    ${EColors.headerBackgroundBlack} 0%,
    ${EColors.headerBackground} 29%,
    ${EColors.headerBackground} 50%,
    ${EColors.headerBackground} 71%,
    ${EColors.headerBackgroundBlack} 100%
  );
  background: -o-linear-gradient(
    left,
    ${EColors.headerBackgroundBlack} 0%,
    ${EColors.headerBackground} 29%,
    ${EColors.headerBackground} 50%,
    ${EColors.headerBackground} 71%,
    ${EColors.headerBackgroundBlack} 100%
  );
  background: -ms-linear-gradient(
    left,
    ${EColors.headerBackgroundBlack} 0%,
    ${EColors.headerBackground} 29%,
    ${EColors.headerBackground} 50%,
    ${EColors.headerBackground} 71%,
    ${EColors.headerBackgroundBlack} 100%
  );
  background: linear-gradient(
    to right,
    ${EColors.headerBackgroundBlack} 0%,
    ${EColors.headerBackground} 29%,
    ${EColors.headerBackground} 50%,
    ${EColors.headerBackground} 71%,
    ${EColors.headerBackgroundBlack} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${EColors.headerBackgroundBlack}, endColorstr='#bc3220', GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }

  > label {
    position: relative;
  }
`;

S.FormTitle = styled.h3`
  margin-bottom: 30px;
  white-space: nowrap;
  text-align: center;
  font-size: 45px;
  font-weight: 900;
  text-shadow: -1px -2px ${EColors.yellowLogo},
    0 1px 0 ${EColors.orangeNavigation};
  color: ${EColors.waite};
`;

S.FormInput = styled.input`
  height: 45px;
  ${styleForInput}
  ${background}
`;

S.FormTextarea = styled.textarea`
  height: 150px;
  ${styleForInput}
  ${background}
`;

S.FormButton = styled.button`
  display: block;
  padding: 1em;
  width: 100%;
  color: ${EColors.waite};
  letter-spacing: 1.5px;
  text-transform: capitalize;
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: ${EColors.orangeNavigation};
  background: -moz-linear-gradient(
    top,
    ${EColors.orangeNavigation} 0%,
    ${EColors.yellowLogo} 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, ${EColors.orangeNavigation}),
    color-stop(100%, ${EColors.yellowLogo})
  );
  background: -webkit-linear-gradient(
    top,
    0%,
    ${EColors.orangeNavigation} ${EColors.yellowLogo} 100%
  );
  background: -o-linear-gradient(
    top,
    ${EColors.orangeNavigation} 0%,
    ${EColors.yellowLogo} 100%
  );
  background: -ms-linear-gradient(
    top,
    ${EColors.orangeNavigation} 0%,
    ${EColors.yellowLogo} 100%
  );
  background: linear-gradient(
    to bottom,
    ${EColors.orangeNavigation} 0%,
    ${EColors.yellowLogo} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${EColors.orangeNavigation}, endColorstr=${EColors.yellowLogo}, GradientType=0 );
  border: 0;
  border-radius: 30px;
  color: #${EColors.waite};
  margin-top: 50px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  text-shadow: -1px -1px ${EColors.orangeNavigation},
    0 1px 0 ${EColors.yellowLogo};

  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }
`;
