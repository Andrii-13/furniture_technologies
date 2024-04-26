import { Container } from 'components/App/App.styled';
import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { HeaderNav, HeaderWrap, Link } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/servises">Servises</Link>
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};
