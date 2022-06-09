import React, { useState } from 'react';
import { navigation } from '../../ENUM/Enum';
import { S } from './styles';
import logo from '../../assets/images/logo.png';

export const Header: React.FC = () => {
  const [hover, setHover] = useState<string>('');

  const handleChange = (e: React.MouseEvent) => {
    const text = e.target as HTMLElement;
    setHover(text.innerHTML);
  };

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.Logo src={logo} />
        <S.LogoText>Manager</S.LogoText>
      </S.LogoWrapper>
      <S.Nav>
        <S.List>
          {navigation.map((link, index) => (
            <S.Item
              onMouseOut={() => setHover('')}
              onMouseOver={handleChange}
              key={index}
            >
              <S.Link
                transform={link.replace('-', ' ') === hover ? '100%' : 0}
                to={link === navigation[0] ? '/' : link}
              >
                {link.replace('-', ' ')}
              </S.Link>
            </S.Item>
          ))}
        </S.List>
      </S.Nav>
    </S.Header>
  );
};
