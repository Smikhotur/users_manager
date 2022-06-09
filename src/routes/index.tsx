import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { routeConfig } from './indexRouters';
import { S } from './styles';

export const Routes: React.FC = () => (
  <S.Wrapper>
    <Header />
    <S.Main>
      <Switch>
        {routeConfig.map((route, index) => (
          <Route {...route} key={index} />
        ))}
        <Redirect to='/' />
      </Switch>
    </S.Main>
    <Footer />
  </S.Wrapper>
);
