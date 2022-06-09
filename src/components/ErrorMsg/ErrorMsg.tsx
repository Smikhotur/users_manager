import React from 'react';
import { S } from './styles';

const ErrorMsg: React.FC<{ msg: string }> = ({ msg }) => {
  return <S.ErrorText>{msg}</S.ErrorText>;
};

export default ErrorMsg;
