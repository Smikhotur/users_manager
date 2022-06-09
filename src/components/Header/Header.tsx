import React, { useState } from 'react';
import { navigation } from '../../ENUM/Enum';
import { S } from './styles';
import logo from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
  const [hover, setHover] = useState<string>('');
  const [active, setActive] = useState<string>('');
  const {
    location: { pathname },
  } = useHistory();

  const handleChange = (e: React.MouseEvent) => {
    const text = e.target as HTMLElement;
    setHover(text.innerHTML);
  };

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.LinkImg
          onClick={() => {
            setActive('/');
          }}
          to='/'
        >
          <S.Logo src={logo} />
        </S.LinkImg>
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
                elect={
                  pathname.includes(link)
                    ? '100%'
                    : active === link ||
                      (link === navigation[0] && !pathname.slice(1))
                    ? '100%'
                    : 0
                }
                to={link === navigation[0] ? '/' : link}
                onClick={() => {
                  setActive(link);
                }}
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
